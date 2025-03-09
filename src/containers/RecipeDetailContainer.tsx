
import { useState } from "react";
import { smoothies } from "@/data/smoothiesData";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Smoothie } from "@/data/types";

interface RecipeDetailContainerProps {
  smoothieId: string;
  onOpenLoginDialog: () => void;
  onOpenCollectionDialog: () => void;
  onOpenGallery: (index: number) => void;
}

const RecipeDetailContainer = ({ 
  smoothieId, 
  onOpenLoginDialog,
  onOpenCollectionDialog,
  onOpenGallery
}: RecipeDetailContainerProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const { user } = useAuth();
  
  const smoothie = smoothies.find((s) => s.id === smoothieId);
  
  // Handle the case where no smoothie is found
  if (!smoothie) {
    return { smoothie: null, sidebarProps: { selectedCategory, onCategorySelect: setSelectedCategory, showAdvancedSearch, onAdvancedSearchToggle: setShowAdvancedSearch } };
  }

  const handleSaveRecipe = () => {
    if (!user) {
      onOpenLoginDialog();
      return;
    }
    
    onOpenCollectionDialog();
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
    onOpenGallery(index);
  };

  const handleReviewsUpdate = (newAvgRating: number, newReviewCount: number) => {
    setAverageRating(newAvgRating);
    setReviewCount(newReviewCount);
  };

  const scrollToReviews = () => {
    document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    smoothie,
    sidebarProps: {
      selectedCategory,
      onCategorySelect: setSelectedCategory,
      showAdvancedSearch,
      onAdvancedSearchToggle: setShowAdvancedSearch
    },
    recipeProps: {
      handleSaveRecipe,
      handlePrintRecipe,
      handleEmailRecipe,
      handleTextIngredients,
      videoThumbnail,
      dummyImages,
      galleryImages,
      openGallery,
      initialImageIndex,
      averageRating,
      reviewCount,
      handleReviewsUpdate,
      scrollToReviews
    }
  };
};

export default RecipeDetailContainer;
