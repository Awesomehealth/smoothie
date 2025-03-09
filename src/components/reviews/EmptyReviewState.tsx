
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EmptyReviewStateProps {
  onAddReviewClick: () => void;
}

const EmptyReviewState = ({ onAddReviewClick }: EmptyReviewStateProps) => {
  return (
    <Card className="p-6 text-center">
      <p className="text-gray-500 mb-4">No reviews yet. Be the first to review this recipe!</p>
      <Button 
        onClick={onAddReviewClick}
        className="bg-coral-500 hover:bg-coral-600 text-white"
      >
        Write a Review
      </Button>
    </Card>
  );
};

export default EmptyReviewState;
