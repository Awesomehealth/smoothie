
import React from "react";
import { Button } from "@/components/ui/button";

interface ReviewListHeaderProps {
  reviewsCount: number;
  userHasReview: boolean;
  onAddReviewClick: () => void;
  onEditReviewClick: () => void;
  onDeleteReviewClick: () => void;
}

const ReviewListHeader = ({
  reviewsCount,
  userHasReview,
  onAddReviewClick,
  onEditReviewClick,
  onDeleteReviewClick,
}: ReviewListHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-800">
        Reviews ({reviewsCount})
      </h2>
      
      {userHasReview ? (
        <div className="flex gap-2">
          <Button variant="outline" onClick={onEditReviewClick}>
            Edit Your Review
          </Button>
          <Button variant="destructive" onClick={onDeleteReviewClick}>
            Delete
          </Button>
        </div>
      ) : (
        <Button 
          onClick={onAddReviewClick}
          className="bg-coral-500 hover:bg-coral-600 text-white"
        >
          Write a Review
        </Button>
      )}
    </div>
  );
};

export default ReviewListHeader;
