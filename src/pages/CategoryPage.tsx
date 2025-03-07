
import { useParams } from "react-router-dom";
import { categories } from "@/data/categories";
import CategorySidebar from "@/components/CategorySidebar";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Find the category data based on the URL parameter
  const category = categories.find((cat) => cat.id === categoryId);
  
  return (
    <SmoothieAppLayout
      sidebar={
        <CategorySidebar
          selectedCategory={categoryId || null}
          onCategorySelect={() => {}}
          showAdvancedSearch={false}
          onAdvancedSearchToggle={() => {}}
        />
      }
      mainContent={
        <div className="w-full max-w-7xl mx-auto p-8">
          <h1 className="text-2xl font-bold mb-4">{category?.name || "Category"}</h1>
          {/* Empty content area - will be populated later */}
        </div>
      }
    />
  );
};

export default CategoryPage;
