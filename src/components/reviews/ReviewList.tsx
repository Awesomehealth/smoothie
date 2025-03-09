
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import LoginDialog from "@/components/auth/LoginDialog";
import ReviewForm from "./ReviewForm";
import ReviewListHeader from "./ReviewListHeader";
import ReviewItem from "./ReviewItem";
import EmptyReviewState from "./EmptyReviewState";

type Review = {
  id: string;
  user_id: string;
  smoothie_id: string;
  rating: number;
  comment: string;
  created_at: string;
  updated_at: string;
  user_email?: string;
};

interface ReviewListProps {
  smoothieId: string;
  reviewCount: number;
  averageRating: number;
  onReviewsUpdate: (averageRating: number, reviewCount: number) => void;
}

const ReviewList = ({ smoothieId, reviewCount, averageRating, onReviewsUpdate }: ReviewListProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [userReview, setUserReview] = useState<Review | null>(null);
  const { user } = useAuth();

  // Fetch reviews for this smoothie
  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("smoothie_id", smoothieId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      
      // Since we can't query auth.users directly, we'll use a simplified approach
      const reviewsWithUserInfo = (data || []).map(review => ({
        ...review,
        // Use a default username based on user ID when email is not available
        user_email: review.user_id === user?.id 
          ? user.email 
          : `user_${review.user_id.substring(0, 8)}`
      }));

      setReviews(reviewsWithUserInfo);
      
      if (user) {
        const userExistingReview = data?.find(review => review.user_id === user.id) || null;
        setUserReview(userExistingReview);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate stats when reviews change
  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      const newAverage = parseFloat((totalRating / reviews.length).toFixed(1));
      onReviewsUpdate(newAverage, reviews.length);
    }
  }, [reviews, onReviewsUpdate]);

  // Fetch reviews on initial load
  useEffect(() => {
    fetchReviews();
  }, [smoothieId]);

  // Check if user already has a review when user logs in
  useEffect(() => {
    if (user) {
      const existingReview = reviews.find(review => review.user_id === user.id);
      setUserReview(existingReview || null);
    } else {
      setUserReview(null);
    }
  }, [user, reviews]);

  // Subscribe to real-time updates
  useEffect(() => {
    const channel = supabase
      .channel('reviews-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'reviews',
          filter: `smoothie_id=eq.${smoothieId}`
        },
        () => fetchReviews()
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, [smoothieId]);

  const handleAddReviewClick = () => {
    if (!user) {
      setShowLoginDialog(true);
    } else {
      setShowReviewForm(true);
    }
  };

  const handleReviewSubmitted = () => {
    setShowReviewForm(false);
    fetchReviews();
    toast({
      title: "Thank you for your review!",
      description: "Your review has been submitted successfully.",
    });
  };

  const handleEditReview = () => {
    setShowReviewForm(true);
  };

  const handleDeleteReview = async () => {
    if (!userReview) return;

    try {
      const { error } = await supabase
        .from("reviews")
        .delete()
        .eq("id", userReview.id);

      if (error) throw error;

      setUserReview(null);
      fetchReviews();
      toast({
        description: "Your review has been deleted.",
      });
    } catch (error) {
      console.error("Error deleting review:", error);
      toast({
        title: "Error",
        description: "Could not delete your review. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full space-y-6">
      <ReviewListHeader 
        reviewsCount={reviews.length}
        userHasReview={!!userReview}
        onAddReviewClick={handleAddReviewClick}
        onEditReviewClick={handleEditReview}
        onDeleteReviewClick={handleDeleteReview}
      />

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-pulse text-gray-400">Loading reviews...</div>
        </div>
      ) : reviews.length === 0 ? (
        <EmptyReviewState onAddReviewClick={handleAddReviewClick} />
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewItem 
              key={review.id} 
              review={review} 
              currentUserId={user?.id}
            />
          ))}
        </div>
      )}

      {showReviewForm && (
        <ReviewForm
          smoothieId={smoothieId}
          existingReview={userReview}
          onReviewSubmitted={handleReviewSubmitted}
          onCancel={() => setShowReviewForm(false)}
        />
      )}

      <LoginDialog isOpen={showLoginDialog} onClose={() => setShowLoginDialog(false)} />
    </div>
  );
};

export default ReviewList;
