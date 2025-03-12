'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecipe } from "@/contexts/RecipeContext";
import LoginDialog from "../auth/LoginDialog";
import CollectionDialog from "../collections/CollectionDialog";
import ImageGallery from "../gallery/ImageGallery";
import NotFoundContent from "./NotFoundContent";
import RecipeContent from "./RecipeContent";
import RecipeDetailContainer from "@/containers/RecipeDetailContainer";
import Loader from "../ui/loader";

export default function RecipeMainContent({ recipeSlug }: { recipeSlug: string }) {
  const { recipe: smoothie, loading } = useRecipe();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [collectionDialogOpen, setCollectionDialogOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const router = useRouter();

  const { recipeProps } = RecipeDetailContainer({
    smoothie,
    onOpenLoginDialog: () => setLoginDialogOpen(true),
    onOpenCollectionDialog: () => setCollectionDialogOpen(true),
    onOpenGallery: (index) => {
      recipeProps.initialImageIndex = index;
      setGalleryOpen(true);
    }
  });

  if (!smoothie && !loading) {
    return <NotFoundContent />;
  }

  if (loading) {
    return <Loader />;
  }

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <div className="w-full">
        <RecipeContent
          smoothie={smoothie}
          smoothieId={smoothie.id || ''}
          onViewAllPhotos={() => setGalleryOpen(true)}
          onGoBack={handleGoBack}
          handleSaveRecipe={recipeProps.handleSaveRecipe}
          handlePrintRecipe={recipeProps.handlePrintRecipe}
          handleEmailRecipe={recipeProps.handleEmailRecipe}
          handleTextIngredients={recipeProps.handleTextIngredients}
          videoThumbnail={recipeProps.videoThumbnail}
          dummyImages={recipeProps.dummyImages}
          openGallery={recipeProps.openGallery}
          averageRating={recipeProps.averageRating}
          reviewCount={recipeProps.reviewCount}
          handleReviewsUpdate={recipeProps.handleReviewsUpdate}
          scrollToReviews={recipeProps.scrollToReviews}
        />
      </div>

      <LoginDialog isOpen={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} />
      <CollectionDialog
        isOpen={collectionDialogOpen}
        onClose={() => setCollectionDialogOpen(false)}
        smoothieId={smoothie.id || ''}
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