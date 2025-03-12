'use client';

import { useCategories } from "@/contexts/CategoriesContext";
import { useState } from "react";
import CategoryHeader from "../CategoryHeader";
import CategoryInfoCards from "../CategoryInfoCards";
import CategorySearchSection from "../CategorySearchSection";
import SmoothieList from "../SmoothieList";
import { useCategoryRecipes } from "@/contexts/CategoryRecipesContext";
import { CategoryType } from "@/types/db";
import { useSidebar } from "@/contexts/SidebarContext";
import Loader from "../ui/loader";

function RecipeList({ category }: { category: CategoryType }) {
  const { showAdvancedSearch } = useSidebar()
  const { categoryRecipes, loading: isCategoryRecipesLoading } = useCategoryRecipes()
  const [searchQuery, setSearchQuery] = useState("");
  const [displayLimit, setDisplayLimit] = useState(6);

  const filteredSmoothies = searchQuery
    ? categoryRecipes.filter(
      (smoothie) =>
        smoothie.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        smoothie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        smoothie.ingredients.some(recipe_ingredient =>
          recipe_ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
    : categoryRecipes;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setDisplayLimit(6);
  };

  const handleUrlSubmit = (url: string) => {
    console.log("URL submitted:", url);
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
    <div className="w-full max-w-7xl mx-auto p-8">
      <CategoryHeader category={category} isPostWorkout={false} />
      {/*  isPostWorkout={categoryId === 'post-workout'} */}

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
        <CategoryInfoCards categoryId={category.id} />
      </div>

      {
        isCategoryRecipesLoading
          ?
          <Loader />
          :
          <SmoothieList
            smoothies={filteredSmoothies}
            searchQuery={searchQuery}
            currentCategory={category.main_title}
            displayLimit={displayLimit}
            onLoadMore={handleLoadMore}
            hasMoreItems={displayLimit < filteredSmoothies.length}
          />
      }
    </div>
  )
}

function CategoryRecipeList({ categoryId }: { categoryId: string }) {
  const { categories, loading: isCategoriesLoading } = useCategories();
  const category = categories.find((cat) => cat.id === categoryId);

  if (isCategoriesLoading || !category) {
    return null;
  }

  return (
    <RecipeList category={category} />
  )
}

export default CategoryRecipeList