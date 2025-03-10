
import React from "react";
import { Button } from "@/components/ui/button";

interface ReviewListHeaderProps {
  reviewCount: number;
  averageRating: number;
  onAddReview: () => void;
  userHasReviewed: boolean;
  userIsLoggedIn: boolean;
}

const ReviewListHeader = ({
  reviewCount,
  averageRating,
  onAddReview,
  userHasReviewed,
  userIsLoggedIn,
}: ReviewListHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-800">
        Reviews ({reviewCount})
      </h2>
      
      {userHasReviewed ? (
        <div className="flex gap-2">
          <Button variant="outline" onClick={onAddReview}>
            Edit Your Review
          </Button>
        </div>
      ) : (
        <Button 
          onClick={onAddReview}
          className="bg-coral-500 hover:bg-coral-600 text-white"
          disabled={!userIsLoggedIn}
        >
          Write a Review
        </Button>
      )}
    </div>
  );
};

export default ReviewListHeader;
