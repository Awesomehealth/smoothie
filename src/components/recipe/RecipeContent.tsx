
import { Smoothie } from "@/data/types";
import RecipeHeader from "./RecipeHeader";
import RecipeGallery from "./RecipeGallery";
import RecipeInfo from "./RecipeInfo";
import RecipeMetrics from "./RecipeMetrics";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import RecipeTips from "./RecipeTips";
import RecipeActions from "./RecipeActions";
import ReviewList from "../reviews/ReviewList";
import RelatedRecipes from "./RelatedRecipes";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface RecipeContentProps {
  smoothie: Smoothie;
  smoothieId: string;
  handleSaveRecipe: () => void;
  handlePrintRecipe: () => void;
  handleEmailRecipe: () => void;
  handleTextIngredients: () => void;
  videoThumbnail: string;
  dummyImages: string[];
  openGallery: (index: number) => void;
  averageRating: number;
  reviewCount: number;
  handleReviewsUpdate: (newAvgRating: number, newReviewCount: number) => void;
  scrollToReviews: () => void;
  onViewAllPhotos: () => void;
  onGoBack: () => void;
}

const RecipeContent = ({
  smoothie,
  smoothieId,
  handleSaveRecipe,
  handlePrintRecipe,
  handleEmailRecipe,
  handleTextIngredients,
  videoThumbnail,
  dummyImages,
  openGallery,
  averageRating,
  reviewCount,
  handleReviewsUpdate,
  scrollToReviews,
  onViewAllPhotos,
  onGoBack
}: RecipeContentProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto pb-20">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm px-4 py-2 flex items-center">
        <Button 
          variant="ghost" 
          size="sm"
          rounded="full"
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          onClick={onGoBack}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
      </div>
      
      <RecipeHeader 
        smoothie={smoothie} 
        onSaveRecipe={handleSaveRecipe} 
      />
      
      <RecipeGallery 
        mainImage={videoThumbnail}
        galleryImages={dummyImages}
        smoothieName={smoothie.name}
        onOpenGallery={openGallery}
        onViewAllPhotos={onViewAllPhotos}
      />
      
      <RecipeInfo 
        smoothie={smoothie} 
        averageRating={averageRating} 
        reviewCount={reviewCount}
        onScrollToReviews={scrollToReviews}
      />
      
      <RecipeMetrics smoothie={smoothie} />
      
      <RecipeIngredients ingredients={smoothie.ingredients} />
      
      {smoothie.recipe?.instructions && (
        <RecipeInstructions instructions={smoothie.recipe.instructions} />
      )}
      
      {smoothie.recipe?.tips && (
        <RecipeTips tips={smoothie.recipe.tips} />
      )}
      
      <RecipeActions 
        onSaveRecipe={handleSaveRecipe}
        onPrintRecipe={handlePrintRecipe}
        onEmailRecipe={handleEmailRecipe}
        onTextIngredients={handleTextIngredients}
      />
      
      <div id="reviews-section" className="mt-10 px-6">
        <ReviewList 
          smoothieId={smoothieId} 
          reviewCount={smoothie.recipe?.reviews || 271}
          averageRating={smoothie.recipe?.rating || 4.5}
          onReviewsUpdate={handleReviewsUpdate}
        />
      </div>
      
      <RelatedRecipes 
        currentSmoothieId={smoothieId} 
        categories={smoothie.categories} 
      />
    </div>
  );
};

export default RecipeContent;
