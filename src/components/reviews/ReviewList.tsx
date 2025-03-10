
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import EmptyReviewState from './EmptyReviewState';
import ReviewItem from './ReviewItem';
import ReviewForm from './ReviewForm';
import ReviewListHeader from './ReviewListHeader';
import { Review } from '@/types/review-types';

interface ReviewListProps {
  smoothieId: string;
  initialShowForm?: boolean;
}

const ReviewList = ({ smoothieId, initialShowForm = false }: ReviewListProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const [showReviewForm, setShowReviewForm] = useState(initialShowForm);
  const [userReview, setUserReview] = useState<Review | null>(null);
  
  useEffect(() => {
    fetchReviews();
  }, [smoothieId]);
  
  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      // Query the reviews table for this recipe
      const { data, error } = await supabase
        .from('reviews')
        .select(`
          id,
          rating,
          comment,
          created_at,
          updated_at,
          user_id,
          recipe_id,
          auth.users(email)
        `)
        .eq('recipe_id', smoothieId)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      // Format the reviews with user emails
      const formattedReviews = data.map((review: any) => ({
        ...review,
        user_email: review.users?.email || 'Anonymous',
        smoothie_id: review.recipe_id // Map recipe_id to smoothie_id for compatibility
      }));
      
      setReviews(formattedReviews);
      
      // Check if the user has already left a review
      if (user) {
        const userExistingReview = formattedReviews.find(
          (review: Review) => review.user_id === user.id
        );
        
        if (userExistingReview) {
          setUserReview({
            ...userExistingReview,
            smoothie_id: userExistingReview.recipe_id // Map recipe_id to smoothie_id for compatibility
          });
          setShowReviewForm(false);
        } else {
          setUserReview(null);
        }
      }
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching reviews:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmitReview = (review: Review) => {
    // Add the new review to the list
    if (review.id) {
      // Update existing review
      setReviews(reviews.map(r => r.id === review.id ? {...review, smoothie_id: review.recipe_id} : r));
    } else {
      // Add new review
      setReviews([{...review, smoothie_id: review.recipe_id}, ...reviews]);
    }
    
    setUserReview({...review, smoothie_id: review.recipe_id});
    setShowReviewForm(false);
  };
  
  const handleToggleForm = () => {
    setShowReviewForm(!showReviewForm);
  };
  
  const handleEditReview = () => {
    setShowReviewForm(true);
  };
  
  // Calculate average rating
  const totalRating = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
  
  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Loader className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    );
  }
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <ReviewListHeader 
        reviewCount={reviews.length} 
        averageRating={averageRating} 
        onAddReview={handleToggleForm}
        userHasReviewed={!!userReview}
        userIsLoggedIn={!!user}
      />
      
      {showReviewForm && (
        <ReviewForm 
          smoothieId={smoothieId} 
          onSuccess={handleSubmitReview}
          existingReview={userReview}
          onCancel={() => setShowReviewForm(false)}
        />
      )}
      
      {!isLoading && reviews.length === 0 && !showReviewForm && (
        <EmptyReviewState
          onAddReview={handleToggleForm}
          userIsLoggedIn={!!user}
        />
      )}
      
      {reviews.length > 0 && (
        <div className="space-y-6 mt-6">
          {reviews.map((review) => (
            <ReviewItem 
              key={review.id} 
              review={review}
              isAuthor={user?.id === review.user_id}
              onEditClick={handleEditReview}
              onDeleteSuccess={() => {
                setReviews(reviews.filter(r => r.id !== review.id));
                if (userReview?.id === review.id) {
                  setUserReview(null);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewList;
