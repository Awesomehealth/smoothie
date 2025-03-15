
import { Suspense } from "react";
import { RecipeProvider } from "@/contexts/RecipeContext";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";
import Loader from "@/components/ui/loader";
import RecipeMainContent from "@/components/recipe/RecipeMainContent";

export default async function RecipeDetailPage({ params }: { params: { recipeSlug: string } }) {
  const { recipeSlug } = params;

  return (
    <SmoothieAppLayout
      sidebar={<CategorySidebar />}
      mainContent={
        <Suspense fallback={<Loader />}>
          <RecipeProvider recipeSlug={recipeSlug}>
            <RecipeMainContent recipeSlug={recipeSlug} />
          </RecipeProvider>
        </Suspense>
      }
    />
  );
}
