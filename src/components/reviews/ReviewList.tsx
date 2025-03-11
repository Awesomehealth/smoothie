/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Loader } from 'lucide-react';
import EmptyReviewState from './EmptyReviewState';
import ReviewItem from './ReviewItem';
import ReviewForm from './ReviewForm';
import ReviewListHeader from './ReviewListHeader';
import { Review } from '@/types/review-types';

interface ReviewListProps {
  smoothieId: string;
  initialShowForm?: boolean;
  reviewCount?: number;
  averageRating?: number;
  onReviewsUpdate?: (newAvgRating: number, newReviewCount: number) => void;
}

const ReviewList = ({ 
  smoothieId, 
  initialShowForm = false,
  reviewCount: initialReviewCount,
  averageRating: initialAverageRating,
  onReviewsUpdate
}: ReviewListProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const [showReviewForm, setShowReviewForm] = useState(initialShowForm);
  const [userReview, setUserReview] = useState<Review | null>(null);
  
  // Calculate average rating
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : initialAverageRating || 0;
  const reviewCount = reviews.length || initialReviewCount || 0;
  
  useEffect(() => {
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
            recipe_id
          `)
          .eq('recipe_id', smoothieId)
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        // Format the reviews
        const formattedReviews: Review[] = data.map((review: any) => ({
          id: review.id,
          recipe_id: review.recipe_id,
          user_id: review.user_id,
          rating: review.rating || 0,
          comment: review.comment,
          created_at: review.created_at,
          updated_at: review.updated_at,
          user_email: 'Anonymous' // Default value
        }));
        
        setReviews(formattedReviews);
        
        // Check if the user has already left a review
        if (user) {
          const userExistingReview = formattedReviews.find(
            (review: Review) => review.user_id === user.id
          );
          
          if (userExistingReview) {
            setUserReview(userExistingReview);
            setShowReviewForm(false);
          } else {
            setUserReview(null);
          }
        }
        
        // Update parent component with new rating data
        if (onReviewsUpdate) {
          const newAvgRating = formattedReviews.length > 0 
            ? formattedReviews.reduce((sum, r) => sum + r.rating, 0) / formattedReviews.length 
            : 0;
          onReviewsUpdate(newAvgRating, formattedReviews.length);
        }
      } catch (err: any) {
        setError(err.message);
        console.error('Error fetching reviews:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [onReviewsUpdate, smoothieId, user]);
  
  const handleSubmitReview = (review: Review) => {
    // Add the new review to the list
    if (review.id) {
      // Update existing review
      setReviews(reviews.map(r => r.id === review.id ? review : r));
    } else {
      // Add new review
      setReviews([review, ...reviews]);
    }
    
    setUserReview(review);
    setShowReviewForm(false);
    
    // Update parent component with new rating data
    if (onReviewsUpdate) {
      const newReviews = review.id 
        ? reviews.map(r => r.id === review.id ? review : r)
        : [review, ...reviews];
      
      const newAvgRating = newReviews.reduce((sum, r) => sum + (r.rating || 0), 0) / newReviews.length;
      onReviewsUpdate(newAvgRating, newReviews.length);
    }
  };
  
  const handleToggleForm = () => {
    setShowReviewForm(!showReviewForm);
  };
  
  const handleEditReview = () => {
    setShowReviewForm(true);
  };
  
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
        reviewCount={reviewCount}
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
              currentUserId={user?.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewList;
