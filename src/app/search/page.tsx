'use client';

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";
import SearchSection from "@/components/sections/SearchSection";
import SmoothieList from "@/components/SmoothieList";
import { smoothies } from "@/data/smoothiesData";
import { Smoothie } from "@/data/types";

export default function SearchResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredSmoothies, setFilteredSmoothies] = useState<Smoothie[]>([]);
  const [displayLimit, setDisplayLimit] = useState(12);

  // Filter smoothies based on search query
  useEffect(() => {
    if (!query) {
      setFilteredSmoothies([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const results = smoothies.filter(smoothie => {
      // Search in name, description, and ingredients
      const nameMatch = smoothie.name.toLowerCase().includes(lowerCaseQuery);
      const descMatch = smoothie.description.toLowerCase().includes(lowerCaseQuery);
      const ingredientsMatch = smoothie.ingredients.some(
        ingredient => typeof ingredient === 'string' && ingredient.toLowerCase().includes(lowerCaseQuery)
      );
      const categoriesMatch = smoothie.categories.some(
        category => category.toLowerCase().includes(lowerCaseQuery)
      );
      
      return nameMatch || descMatch || ingredientsMatch || categoriesMatch;
    });

    setFilteredSmoothies(results);
    // Reset display limit when new search is performed
    setDisplayLimit(12);
  }, [query]);

  const handleLoadMore = () => {
    setDisplayLimit(prevLimit => prevLimit + 12);
  };

  const handleSearch = (newQuery: string) => {
    router.push(`/search?q=${encodeURIComponent(newQuery)}`);
  };

  const handleImageUpload = (file: File) => {
    console.log("Image search with:", file.name);
  };

  const handleFilterSelect = (filterType: string, values: string[]) => {
    console.log(`Filter ${filterType} selected:`, values);
  };

  const handleDietaryToggle = (option: string, active: boolean) => {
    console.log("Dietary option toggled:", option, active);
  };

  return (
    <>
      <SmoothieAppLayout
        sidebar={
          <CategorySidebar
            selectedCategory={null}
            onCategorySelect={() => {}}
            showAdvancedSearch={false}
            onAdvancedSearchToggle={() => {}}
          />
        }
        mainContent={
          <div className="flex flex-col w-full">
            {/* Keep search bar at top */}
            <div className="w-full bg-white py-6 px-4">
              <div className="max-w-3xl mx-auto">
                <SearchSection
                  onSearch={handleSearch}
                  onImageUpload={handleImageUpload}
                  onFilterSelect={handleFilterSelect}
                  onDietaryToggle={handleDietaryToggle}
                  showAdvancedSearch={false}
                  hideHeading={true}
                  initialQuery={query}
                />
              </div>
            </div>
            
            {/* Results section */}
            <div className="px-8 py-6 max-w-7xl mx-auto w-full">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredSmoothies.length > 0 
                    ? `${filteredSmoothies.length} results for "${query}"` 
                    : `No results found for "${query}"`}
                </h2>
              </div>
              
              <SmoothieList 
                smoothies={filteredSmoothies} 
                searchQuery={query}
                displayLimit={displayLimit}
                onLoadMore={handleLoadMore}
                hasMoreItems={displayLimit < filteredSmoothies.length}
              />
            </div>
          </div>
        }
      />
    </>
  );
}
