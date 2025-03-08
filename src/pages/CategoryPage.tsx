
import { useParams } from "react-router-dom";
import { categories } from "@/data/categories";
import { smoothies } from "@/data/smoothiesData";
import CategorySidebar from "@/components/CategorySidebar";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { useState } from "react";
import CategoryHeader from "@/components/CategoryHeader";
import CategoryInfoCards from "@/components/CategoryInfoCards";
import CategorySearchSection from "@/components/CategorySearchSection";
import SmoothieList from "@/components/SmoothieList";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  
  // Find the category data based on the URL parameter
  const category = categories.find((cat) => cat.id === categoryId);
  
  // Filter smoothies by category
  const categorySmoothies = smoothies.filter(
    (smoothie) => smoothie.categories.includes(categoryId || '')
  );

  // Filter smoothies by search query within the category
  const filteredSmoothies = searchQuery
    ? categorySmoothies.filter(
        (smoothie) =>
          smoothie.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          smoothie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          smoothie.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : categorySmoothies;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleUrlSubmit = (url: string) => {
    console.log("URL submitted:", url);
    // For future implementation
  };

  const handleAdvancedSearchToggle = (show: boolean) => {
    setShowAdvancedSearch(show);
  };

  const handleFilterSelect = (filterType: string, value: string) => {
    console.log("Filter selected:", filterType, value);
    // Filter functionality will be implemented later
  };

  const handleDietaryToggle = (preference: string, isChecked: boolean) => {
    console.log("Dietary preference toggled:", preference, isChecked);
    // Dietary filter functionality will be implemented later
  };
  
  return (
    <SmoothieAppLayout
      sidebar={
        <CategorySidebar
          selectedCategory={categoryId || null}
          onCategorySelect={() => {}}
          showAdvancedSearch={showAdvancedSearch}
          onAdvancedSearchToggle={handleAdvancedSearchToggle}
        />
      }
      mainContent={
        <div className="w-full max-w-7xl mx-auto p-8">
          <CategoryHeader category={category} isPostWorkout={categoryId === 'post-workout'} />
          
          {/* Info cards section with a subtle background to tie it together */}
          <div className="bg-gradient-to-r from-white to-mint-50/30 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h2>
            <CategoryInfoCards categoryId={categoryId} />
          </div>
          
          {/* Search Section with Advanced Search */}
          <CategorySearchSection 
            categoryName={category?.name || ""}
            showAdvancedSearch={showAdvancedSearch}
            onSearch={handleSearch}
            onUrlSubmit={handleUrlSubmit}
            onFilterSelect={handleFilterSelect}
            onDietaryToggle={handleDietaryToggle}
          />
          
          <SmoothieList 
            smoothies={filteredSmoothies} 
            searchQuery={searchQuery} 
            currentCategory={categoryId}
          />
        </div>
      }
    />
  );
};

export default CategoryPage;
