'use client'

import RecipeDetailContainer from "@/containers/RecipeDetailContainer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginDialog from "../auth/LoginDialog";
import CategorySidebar from "../CategorySidebar";
import CollectionDialog from "../collections/CollectionDialog";
import ImageGallery from "../gallery/ImageGallery";
import SmoothieAppLayout from "../layouts/SmoothieAppLayout";
import NotFoundContent from "./NotFoundContent";
import RecipeContent from "./RecipeContent";
import { useRecipe } from "@/contexts/RecipeContext";
import Loader from "../ui/loader";

function Recipe(){
  
}

export default function RecipeDetail({ recipeId }: { recipeId: string }) {
  const { recipe: smoothie, loading } = useRecipe()
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [collectionDialogOpen, setCollectionDialogOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const router = useRouter();

  const {
    sidebarProps,
    recipeProps
  } = RecipeDetailContainer({
    smoothie,
    onOpenLoginDialog: () => setLoginDialogOpen(true),
    onOpenCollectionDialog: () => setCollectionDialogOpen(true),
    onOpenGallery: (index) => {
      recipeProps.initialImageIndex = index;
      setGalleryOpen(true);
    }
  });

  if (loading) {
    return <Loader />
  }

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
                smoothieId={recipeId || ''}
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
        smoothieId={recipeId || ''}
        smoothieName={smoothie?.name || ''}
      />

      <ImageGallery
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={recipeProps.galleryImages}
        initialIndex={recipeProps.initialImageIndex}
      />
    </>
  )
}