import CategoryRecipeList from "@/components/category/CategoryRecipeList"
import CategorySidebar from "@/components/CategorySidebar"
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout"
import { CategoryRecipesProvider } from "@/contexts/CategoryRecipesContext"
import { Loader } from "lucide-react"
import { Suspense } from "react"

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>
}) {
  const { categorySlug } = await params
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
