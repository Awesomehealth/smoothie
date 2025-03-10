
'use client';

import { useState } from "react";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";
import LoginDialog from "@/components/auth/LoginDialog";
import CollectionDialog from "@/components/collections/CollectionDialog";
import ImageGallery from "@/components/gallery/ImageGallery";
import RecipeContent from "@/components/recipe/RecipeContent";
import NotFoundContent from "@/components/recipe/NotFoundContent";
import RecipeDetailContainer from "@/containers/RecipeDetailContainer";
import { useRouter } from "next/navigation";

export default function RecipeDetailPage({ params }: { params: { smoothieId: string } }) {
  const smoothieId = params.smoothieId;
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [collectionDialogOpen, setCollectionDialogOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const router = useRouter();
  
  const { 
    smoothie, 
    sidebarProps, 
    recipeProps 
  } = RecipeDetailContainer({ 
    smoothieId: smoothieId || '', 
    onOpenLoginDialog: () => setLoginDialogOpen(true),
    onOpenCollectionDialog: () => setCollectionDialogOpen(true),
    onOpenGallery: (index) => {
      recipeProps.initialImageIndex = index;
      setGalleryOpen(true);
    }
  });
  
  const handleGoBack = () => {
    router.back();
  };
  
  return (
    <>
      <SmoothieAppLayout
        sidebar={
          <CategorySidebar
            selectedCategory={sidebarProps.selectedCategory}
            onCategorySelect={sidebarProps.onCategorySelect}
            showAdvancedSearch={sidebarProps.showAdvancedSearch}
            onAdvancedSearchToggle={sidebarProps.onAdvancedSearchToggle}
          />
        }
        mainContent={
          <div className="w-full">
            {!smoothie ? (
              <NotFoundContent />
            ) : (
              <RecipeContent
                smoothie={smoothie}
                smoothieId={smoothieId || ''}
                {...recipeProps}
                onViewAllPhotos={() => setGalleryOpen(true)}
                onGoBack={handleGoBack}
              />
            )}
          </div>
        }
      />
      
      <LoginDialog isOpen={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} />
      
      <CollectionDialog 
        isOpen={collectionDialogOpen} 
        onClose={() => setCollectionDialogOpen(false)} 
        smoothieId={smoothieId || ''}
        smoothieName={smoothie?.name || ''}
      />

      <ImageGallery 
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={recipeProps.galleryImages}
        initialIndex={recipeProps.initialImageIndex}
      />
    </>
  );
}
