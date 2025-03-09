import { useParams } from "react-router-dom";
import { smoothies } from "@/data/smoothiesData";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import CategorySidebar from "@/components/CategorySidebar";
import LoginDialog from "@/components/auth/LoginDialog";
import CollectionDialog from "@/components/collections/CollectionDialog";
import ImageGallery from "@/components/gallery/ImageGallery";
import ReviewList from "@/components/reviews/ReviewList";
import { useAuth } from "@/contexts/AuthContext";

// Import refactored components
import RecipeHeader from "@/components/recipe/RecipeHeader";
import RecipeGallery from "@/components/recipe/RecipeGallery";
import RecipeInfo from "@/components/recipe/RecipeInfo";
import RecipeMetrics from "@/components/recipe/RecipeMetrics";
import RecipeIngredients from "@/components/recipe/RecipeIngredients";
import RecipeInstructions from "@/components/recipe/RecipeInstructions";
import RecipeTips from "@/components/recipe/RecipeTips";
import RecipeActions from "@/components/recipe/RecipeActions";
import RelatedRecipes from "@/components/recipe/RelatedRecipes";

// Import Link for the Not Found state
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RecipeDetailPage = () => {
  const { smoothieId } = useParams<{ smoothieId: string }>();
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [collectionDialogOpen, setCollectionDialogOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const { user } = useAuth();
  
  const smoothie = smoothies.find((s) => s.id === smoothieId);
  
  if (!smoothie) {
    return (
      <SmoothieAppLayout
        sidebar={
          <CategorySidebar
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            showAdvancedSearch={showAdvancedSearch}
            onAdvancedSearchToggle={setShowAdvancedSearch}
          />
        }
        mainContent={
          <div className="w-full max-w-3xl mx-auto p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
            <p className="mb-6">We couldn't find the recipe you're looking for.</p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        }
      />
    );
  }

  const handleSaveRecipe = () => {
    if (!user) {
      setLoginDialogOpen(true);
      return;
    }
    
    setCollectionDialogOpen(true);
  };

  const handlePrintRecipe = () => {
    window.print();
  };

  const handleEmailRecipe = () => {
    toast({
      description: "Email feature coming soon!",
    });
  };

  const handleTextIngredients = () => {
    toast({
      description: "Text feature coming soon!",
    });
  };

  const videoThumbnail = "https://player.vimeo.com/external/414566109.sd.mp4?s=c912f93f5ce54b6fe68d5bcdf3d20a3255dbba6c&profile_id=139&oauth2_token_id=57447761";
  const dummyImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  ];

  const galleryImages = [
    smoothie.image || "/placeholder.svg", 
    ...dummyImages
  ];

  const openGallery = (index: number) => {
    setInitialImageIndex(index);
    setGalleryOpen(true);
  };

  const handleReviewsUpdate = (newAvgRating: number, newReviewCount: number) => {
    setAverageRating(newAvgRating);
    setReviewCount(newReviewCount);
  };

  const scrollToReviews = () => {
    document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SmoothieAppLayout
      sidebar={
        <CategorySidebar
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          showAdvancedSearch={showAdvancedSearch}
          onAdvancedSearchToggle={setShowAdvancedSearch}
        />
      }
      mainContent={
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
            onViewAllPhotos={() => setGalleryOpen(true)}
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
              smoothieId={smoothieId || ''} 
              reviewCount={smoothie.recipe?.reviews || 271}
              averageRating={smoothie.recipe?.rating || 4.5}
              onReviewsUpdate={handleReviewsUpdate}
            />
          </div>
          
          <RelatedRecipes 
            currentSmoothieId={smoothieId || ''} 
            categories={smoothie.categories} 
          />
          
          <LoginDialog isOpen={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} />
          
          <CollectionDialog 
            isOpen={collectionDialogOpen} 
            onClose={() => setCollectionDialogOpen(false)} 
            smoothieId={smoothieId || ''}
            smoothieName={smoothie.name}
          />

          <ImageGallery 
            isOpen={galleryOpen}
            onClose={() => setGalleryOpen(false)}
            images={galleryImages}
            initialIndex={initialImageIndex}
          />
        </div>
      }
    />
  );
};

export default RecipeDetailPage;
