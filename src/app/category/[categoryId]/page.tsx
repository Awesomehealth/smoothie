
'use client';

import { smoothies } from "@/data/smoothiesData";
import CategorySidebar from "@/components/CategorySidebar";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { useState } from "react";
import CategoryHeader from "@/components/CategoryHeader";
import CategoryInfoCards from "@/components/CategoryInfoCards";
import CategorySearchSection from "@/components/CategorySearchSection";
import SmoothieList from "@/components/SmoothieList";
import { useCategories } from "@/contexts/CategoriesContext";
import Loader from "@/components/ui/loader";

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const categoryId = params.categoryId;
  const { categories, loading: isCategoriesLoading } = useCategories();
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(6);

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
          typeof ingredient === 'string' && ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
    : categorySmoothies;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setDisplayLimit(6);
  };

  const handleUrlSubmit = (url: string) => {
    console.log("URL submitted:", url);
  };

  const handleAdvancedSearchToggle = (show: boolean) => {
    setShowAdvancedSearch(show);
  };

  const handleFilterSelect = (filterType: string, values: string[]) => {
    console.log("Filter selected:", filterType, values);
  };

  const handleDietaryToggle = (preference: string, isChecked: boolean) => {
    console.log("Dietary preference toggled:", preference, isChecked);
  };

  const handleLoadMore = () => {
    setDisplayLimit(prevLimit => prevLimit + 3);
  };

  return (
    <>
      <SmoothieAppLayout
        sidebar={
          <CategorySidebar
            selectedCategory={categoryId || null}
            onCategorySelect={() => { }}
            showAdvancedSearch={showAdvancedSearch}
            onAdvancedSearchToggle={handleAdvancedSearchToggle}
          />
        }
        mainContent={
          isCategoriesLoading
            ?
            <Loader />
            :
            category &&
            <div className="w-full max-w-7xl mx-auto p-8">
              <CategoryHeader category={category} isPostWorkout={categoryId === 'post-workout'} />

              {/* Search Section with Advanced Search */}
              <CategorySearchSection
                categoryName={category?.main_title || ""}
                showAdvancedSearch={showAdvancedSearch}
                onSearch={handleSearch}
                onUrlSubmit={handleUrlSubmit}
                onFilterSelect={handleFilterSelect}
                onDietaryToggle={handleDietaryToggle}
              />

              {/* Info cards section with a subtle background */}
              <div className="bg-gradient-to-r from-white to-mint-50/30 rounded-xl p-6 mb-8">
                <CategoryInfoCards categoryId={categoryId} />
              </div>

              <SmoothieList
                smoothies={filteredSmoothies}
                searchQuery={searchQuery}
                currentCategory={categoryId}
                displayLimit={displayLimit}
                onLoadMore={handleLoadMore}
                hasMoreItems={displayLimit < filteredSmoothies.length}
              />
            </div>
        }
      />
    </>
  );
}
