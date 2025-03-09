
import { useParams } from "react-router-dom";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { useState } from "react";
import CategorySidebar from "@/components/CategorySidebar";
import LoginDialog from "@/components/auth/LoginDialog";
import CollectionDialog from "@/components/collections/CollectionDialog";
import ImageGallery from "@/components/gallery/ImageGallery";
import RecipeContent from "@/components/recipe/RecipeContent";
import NotFoundContent from "@/components/recipe/NotFoundContent";
import RecipeDetailContainer from "@/containers/RecipeDetailContainer";

const RecipeDetailPage = () => {
  const { smoothieId } = useParams<{ smoothieId: string }>();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [collectionDialogOpen, setCollectionDialogOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  
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
          !smoothie ? (
            <NotFoundContent />
          ) : (
            <RecipeContent
              smoothie={smoothie}
              smoothieId={smoothieId || ''}
              {...recipeProps}
              onViewAllPhotos={() => setGalleryOpen(true)}
            />
          )
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
};

export default RecipeDetailPage;
