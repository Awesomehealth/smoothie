
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface ReviewFormProps {
  smoothieId: string;
  existingReview: any | null;
  onReviewSubmitted: () => void;
  onCancel: () => void;
}

const ReviewForm = ({ smoothieId, existingReview, onReviewSubmitted, onCancel }: ReviewFormProps) => {
  const [rating, setRating] = useState(existingReview?.rating || 5);
  const [comment, setComment] = useState(existingReview?.comment || "");
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  if (!user) {
    return (
      <Card className="p-6 text-center">
        <p>You need to be logged in to leave a review.</p>
      </Card>
    );
  }

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const handleRatingHover = (value: number) => {
    setHoveredRating(value);
  };

  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to submit a review",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      if (existingReview) {
        // Update existing review
        const { error } = await supabase
          .from("reviews")
          .update({
            rating,
            comment,
            updated_at: new Date().toISOString(),
          })
          .eq("id", existingReview.id);

        if (error) throw error;
      } else {
        // Create new review
        const { error } = await supabase
          .from("reviews")
          .insert({
            user_id: user.id,
            smoothie_id: smoothieId,
            rating,
            comment,
          });

        if (error) throw error;
      }

      onReviewSubmitted();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Error",
        description: "Failed to submit your review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">
        {existingReview ? "Edit Your Review" : "Write a Review"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block font-medium">Rating</label>
          <div 
            className="flex gap-1" 
            onMouseLeave={handleRatingLeave}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-8 w-8 cursor-pointer ${
                  star <= (hoveredRating || rating)
                    ? "text-coral-500 fill-coral-500"
                    : "text-gray-300"
                }`}
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => handleRatingHover(star)}
              />
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="comment" className="block font-medium">
            Comment (optional)
          </label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts about this recipe..."
            rows={4}
          />
        </div>
        
        <div className="flex justify-end gap-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-coral-500 hover:bg-coral-600 text-white"
          >
            {isSubmitting ? "Submitting..." : existingReview ? "Update Review" : "Submit Review"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ReviewForm;
