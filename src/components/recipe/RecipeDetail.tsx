
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useState } from 'react';
import CategorySidebar from '@/components/CategorySidebar';
import RecipeContent from './RecipeContent';
import ImageGallery from '@/components/gallery/ImageGallery';
import { useSidebar } from '@/contexts/SidebarContext';
import CollectionDialog from '@/components/collections/CollectionDialog';

interface RecipeDetailProps {
  smoothie: any;
  recipeProps?: any;
  smoothieId?: string;
  smoothieName?: string;
}

const RecipeDetail = ({ smoothie, recipeProps = {}, smoothieId, smoothieName }: RecipeDetailProps) => {
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

  // Safely handle missing smoothie data
  if (!smoothie) {
    console.error('No smoothie data provided to RecipeDetail component');
    return <div className="flex justify-center items-center h-screen">Loading recipe details...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-full">
      <CategorySidebar isCollapsed={false} />
      
      <RecipeContent 
        smoothie={smoothie}
        handleSaveRecipe={handleSaveRecipe}
        onViewAllPhotos={handleViewAllPhotos}
        onGoBack={() => window.history.back()}
        smoothieId={smoothieId || smoothie.id || ''}
        smoothieName={smoothieName || smoothie.name || ''}
        {...defaultRecipeProps}
      />

      {showGallery && (
        <ImageGallery
          isOpen={showGallery}
          images={smoothie.image ? [smoothie.image] : []}
          onClose={() => setShowGallery(false)}
        />
      )}

      <CollectionDialog
        isOpen={showCollectionDialog}
        onClose={() => setShowCollectionDialog(false)}
        smoothieId={smoothieId || smoothie.id || ''}
        smoothieName={smoothieName || smoothie.name || ''}
      />
    </div>
  );
};

export default RecipeDetail;
