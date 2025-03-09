
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
  onViewAllPhotos
}: RecipeContentProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto pb-20">
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
