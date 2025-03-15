
import React, { useState } from 'react';
import CategorySidebar from '@/components/CategorySidebar';
import RecipeContent from './RecipeContent';
import ImageGallery from '@/components/gallery/ImageGallery';
import { useSidebar } from '@/contexts/SidebarContext';
import CollectionDialog from '@/components/collections/CollectionDialog';

interface RecipeDetailProps {
  smoothie: any;
  recipeProps?: any;
}

const RecipeDetail = ({ smoothie, recipeProps = {} }: RecipeDetailProps) => {
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

  // Default props if not provided
  const defaultRecipeProps = {
    handleSaveRecipe,
    handlePrintRecipe: () => console.log('Print recipe'),
    handleEmailRecipe: () => console.log('Email recipe'),
    handleTextIngredients: () => console.log('Text ingredients'),
    ...recipeProps
  };

  if (!smoothie) {
    console.error('No smoothie data provided to RecipeDetail component');
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-full">
      <CategorySidebar isCollapsed={false} />
      
      <RecipeContent 
        handleSaveRecipe={handleSaveRecipe}
        onViewAllPhotos={handleViewAllPhotos}
        onGoBack={() => window.history.back()}
        smoothieId={smoothie.id}
        smoothieName={smoothie.name}
        {...defaultRecipeProps}
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
