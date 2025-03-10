
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import LoginDialog from '@/components/auth/LoginDialog';
import { Review } from '@/types/review-types';

interface ReviewFormProps {
  smoothieId: string;
  onSuccess: (review: Review) => void;
  existingReview: Review | null;
  onCancel: () => void;
}

const ReviewForm = ({ smoothieId, onSuccess, existingReview, onCancel }: ReviewFormProps) => {
  const [rating, setRating] = useState<number>(existingReview?.rating || 0);
  const [comment, setComment] = useState<string>(existingReview?.comment || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const { user } = useAuth();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setShowLoginDialog(true);
      return;
    }
    
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a star rating before submitting",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (existingReview) {
        // Update existing review
        const { data, error } = await supabase
          .from('reviews')
          .update({
            rating,
            comment,
            updated_at: new Date().toISOString(),
          })
          .eq('id', existingReview.id)
          .select();
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          const updatedReview: Review = {
            ...data[0],
            user_email: user.email,
            recipe_id: smoothieId
          };
          
          toast({
            description: "Your review has been updated",
          });
          
          onSuccess(updatedReview);
        }
      } else {
        // Insert new review
        const { data, error } = await supabase
          .from('reviews')
          .insert({
            recipe_id: smoothieId,
            user_id: user.id,
            rating,
            comment,
          })
          .select();
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          const newReview: Review = {
            ...data[0],
            user_email: user.email,
            recipe_id: smoothieId
          };
          
          toast({
            description: "Your review has been submitted",
          });
          
          onSuccess(newReview);
        }
      }
    } catch (error: any) {
      console.error('Error submitting review:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit review",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleRatingClick = (value: number) => {
    setRating(value);
  };
  
  return (
    <div className="bg-gray-50 p-5 rounded-lg my-6">
      <h3 className="text-lg font-semibold mb-3">
        {existingReview ? 'Edit Your Review' : 'Write a Review'}
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => handleRatingClick(value)}
              className="focus:outline-none"
            >
              <Star 
                className={`h-8 w-8 ${
                  value <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                } hover:text-yellow-400 transition-colors`} 
              />
            </button>
          ))}
        </div>
        
        <Textarea
          placeholder="Share your thoughts about this smoothie..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px] mb-4"
        />
        
        <div className="flex gap-3">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-awesome-green hover:bg-awesome-green/90"
          >
            {isSubmitting ? 'Submitting...' : existingReview ? 'Update Review' : 'Submit Review'}
          </Button>
          
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </div>
      </form>
      
      <LoginDialog 
        isOpen={showLoginDialog} 
        onClose={() => setShowLoginDialog(false)} 
      />
    </div>
  );
};

export default ReviewForm;
