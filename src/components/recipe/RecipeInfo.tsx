
import { Star } from "lucide-react";
import { Smoothie } from "@/data/types";

interface RecipeInfoProps {
  smoothie: Smoothie;
  averageRating: number;
  reviewCount: number;
  onScrollToReviews: () => void;
}

const RecipeInfo = ({ smoothie, averageRating, reviewCount, onScrollToReviews }: RecipeInfoProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 mb-8">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-2">{smoothie.name} in a glass</h2>
        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                className={`h-5 w-5 ${star <= (averageRating || smoothie.recipe?.rating || 4.5) 
                  ? "text-coral-500 fill-coral-500" 
                  : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600 font-medium">
            {(averageRating || smoothie.recipe?.rating || 4.5).toFixed(1)} · 
            <button 
              className="ml-1 underline text-lavender-600 focus:outline-none"
              onClick={onScrollToReviews}
            >
              {reviewCount || smoothie.recipe?.reviews || 271} reviews
            </button>
          </span>
        </div>
        <p className="text-gray-700 mb-4">{smoothie.description}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Calories</p>
            <p className="font-semibold text-coral-600">{smoothie.nutrition.calories}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Protein</p>
            <p className="font-semibold text-mint-600">{smoothie.nutrition.protein}g</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Carbs</p>
            <p className="font-semibold text-lavender-600">{smoothie.nutrition.carbs}g</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Fat</p>
            <p className="font-semibold text-sky-600">{smoothie.nutrition.fat}g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
