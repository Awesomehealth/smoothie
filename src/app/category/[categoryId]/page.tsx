import CategoryRecipeList from "@/components/category/CategoryRecipeList"
import CategorySidebar from "@/components/CategorySidebar"
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout"
import { CategoryRecipesProvider } from "@/contexts/CategoryRecipesContext"
import SidebarProvider from "@/contexts/SidebarContext"
import { Loader } from "lucide-react"
import { Suspense } from "react"

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>
}) {
  const { categoryId } = await params
  return <SidebarProvider>
    <SmoothieAppLayout
      sidebar={<CategorySidebar />}
      mainContent={
        <Suspense fallback={<Loader />}>
          <CategoryRecipesProvider categoryId={categoryId}>
            <CategoryRecipeList categoryId={categoryId} />
          </CategoryRecipesProvider>
        </Suspense>
      }
    />
  </SidebarProvider>
}
