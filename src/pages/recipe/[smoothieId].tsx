
import { useRouter } from "next/router";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { useState } from "react";
import CategorySidebar from "@/components/CategorySidebar";
import LoginDialog from "@/components/auth/LoginDialog";
import CollectionDialog from "@/components/collections/CollectionDialog";
import ImageGallery from "@/components/gallery/ImageGallery";
import RecipeContent from "@/components/recipe/RecipeContent";
import NotFoundContent from "@/components/recipe/NotFoundContent";
import RecipeDetailContainer from "@/containers/RecipeDetailContainer";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { smoothies } from "@/data/smoothiesData";
import { Smoothie } from "@/data/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { smoothieId } = context.params || {};
  
  // Get the smoothie data for SEO
  const smoothie = smoothies.find(s => s.id === smoothieId);
  
  return {
    props: {
      smoothieId: smoothieId || '',
      initialSmoothie: smoothie || null
    },
  };
};

const RecipeDetailPage = ({ 
  smoothieId, 
  initialSmoothie 
}: { 
  smoothieId: string;
  initialSmoothie: Smoothie | null;
}) => {
  const router = useRouter();
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
  
  const handleGoBack = () => {
    router.back();
  };
  
  return (
    <>
      <Head>
        <title>{smoothie?.name || initialSmoothie?.name || "Recipe"} | Awesome Kitchen</title>
        <meta 
          name="description" 
          content={smoothie?.description || initialSmoothie?.description || "Delicious smoothie recipe"} 
        />
        <meta property="og:title" content={`${smoothie?.name || initialSmoothie?.name || "Recipe"} | Awesome Kitchen`} />
        <meta 
          property="og:description" 
          content={smoothie?.description || initialSmoothie?.description || "Delicious smoothie recipe"} 
        />
        <meta property="og:image" content={smoothie?.image || initialSmoothie?.image || "/og-image.png"} />
      </Head>
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
};

export default RecipeDetailPage;
