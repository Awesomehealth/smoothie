
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ReviewForm from "./ReviewForm";
import { formatDistanceToNow } from "date-fns";
import { toast } from "@/hooks/use-toast";
import LoginDialog from "@/components/auth/LoginDialog";

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
      
      // Get user emails for reviews
      const enrichedReviews = await Promise.all(
        (data || []).map(async (review) => {
          const { data: userData } = await supabase
            .from('auth')
            .select('email')
            .eq('id', review.user_id)
            .single();
          
          return {
            ...review,
            user_email: userData?.email || 'Anonymous User',
          };
        })
      );

      setReviews(data || []);
      
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

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? "text-coral-500 fill-coral-500"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // Display when user already has a review
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
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          Reviews ({reviews.length})
        </h2>
        
        {user && userReview ? (
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleEditReview}>
              Edit Your Review
            </Button>
            <Button variant="destructive" onClick={handleDeleteReview}>
              Delete
            </Button>
          </div>
        ) : (
          <Button 
            onClick={handleAddReviewClick}
            className="bg-coral-500 hover:bg-coral-600 text-white"
          >
            Write a Review
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-pulse text-gray-400">Loading reviews...</div>
        </div>
      ) : reviews.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-gray-500 mb-4">No reviews yet. Be the first to review this recipe!</p>
          <Button 
            onClick={handleAddReviewClick}
            className="bg-coral-500 hover:bg-coral-600 text-white"
          >
            Write a Review
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <Card key={review.id} className="p-4">
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {review.user_id === user?.id ? "You" : review.user_email?.split('@')[0] || "Anonymous"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <div>
                  {renderStars(review.rating)}
                </div>
              </div>
              {review.comment && (
                <p className="text-gray-700 mt-2">{review.comment}</p>
              )}
            </Card>
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
