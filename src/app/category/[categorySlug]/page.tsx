
import CategoryRecipeList from "@/components/category/CategoryRecipeList"
import CategorySidebar from "@/components/CategorySidebar"
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout"
import { CategoryRecipesProvider } from "@/contexts/CategoryRecipesContext"
import Loader from "@/components/ui/loader"
import { Suspense } from "react"

export default function CategoryPage({
  params,
}: {
  params: { categorySlug: string }
}) {
  const { categorySlug } = params
  return <SmoothieAppLayout
    sidebar={<CategorySidebar />}
    mainContent={
      <Suspense fallback={<Loader />}>
        <CategoryRecipesProvider categorySlug={categorySlug}>
          <CategoryRecipeList categorySlug={categorySlug} />
        </CategoryRecipesProvider>
      </Suspense>
    }
  />
}
