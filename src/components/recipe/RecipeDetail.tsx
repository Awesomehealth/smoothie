import React, { useState } from 'react';
import CategorySidebar from '@/components/CategorySidebar';
import RecipeContent from './RecipeContent';
import ImageGallery from '@/components/gallery/ImageGallery';
import { useSidebar } from '@/contexts/SidebarContext';
import CollectionDialog from '@/components/collections/CollectionDialog';

interface RecipeDetailProps {
  smoothie: any;
  recipeProps: any;
}

interface RecipeContentProps {
  handleSaveRecipe: () => void;
  handlePrintRecipe: () => void;
  handleEmailRecipe: () => void;
  handleTextIngredients: () => void;
  videoThumbnail?: string;
  videoUrl?: string;
  onViewAllPhotos?: () => void;
  onGoBack?: () => void;
  smoothieId?: string;
  smoothieName?: string;
  scrollToReviews?: () => void;
}

const RecipeDetail = ({ smoothie, recipeProps }: RecipeDetailProps) => {
  const [showGallery, setShowGallery] = useState(false);
  const [showCollectionDialog, setShowCollectionDialog] = useState(false);
  
  const { 
    selectedCategory, 
    setSelectedCategory, 
    showAdvancedSearch, 
    setShowAdvancedSearch 
  } = useSidebar();

  const handleViewAllPhotos = () => {
    setShowGallery(true);
  };

  const handleSaveRecipe = () => {
    setShowCollectionDialog(true);
  };

  return (
    <div className="flex flex-col md:flex-row h-full">
      <CategorySidebar isCollapsed={false} />
      
      <RecipeContent 
        handleSaveRecipe={handleSaveRecipe}
        onViewAllPhotos={handleViewAllPhotos}
        onGoBack={() => window.history.back()}
        smoothieId={smoothie.id}
        smoothieName={smoothie.name}
        {...recipeProps}
      />

      {showGallery && (
        <ImageGallery
          images={[smoothie.image]}
          onClose={() => setShowGallery(false)}
        />
      )}

      <CollectionDialog
        isOpen={showCollectionDialog}
        onClose={() => setShowCollectionDialog(false)}
        smoothieId={smoothie.id}
        smoothieName={smoothie.name}
      />
    </div>
  );
};

export default RecipeDetail;
