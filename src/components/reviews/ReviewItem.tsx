
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Star, User } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ReviewItemProps {
  review: {
    id: string;
    user_id: string;
    rating: number;
    comment: string;
    created_at: string;
    user_email?: string;
  };
  currentUserId?: string;
}

const ReviewItem = ({ review, currentUserId }: ReviewItemProps) => {
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

  return (
    <Card className="p-4">
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-4 w-4 text-gray-500" />
          </div>
          <div>
            <p className="font-medium">
              {review.user_id === currentUserId ? "You" : review.user_email?.split('@')[0] || "Anonymous"}
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
  );
};

export default ReviewItem;
