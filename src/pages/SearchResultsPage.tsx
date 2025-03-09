
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";
import SearchSection from "@/components/sections/SearchSection";
import SmoothieList from "@/components/SmoothieList";
import { smoothies } from "@/data/smoothiesData";
import { Smoothie } from "@/data/types";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredSmoothies, setFilteredSmoothies] = useState<Smoothie[]>([]);
  const [displayLimit, setDisplayLimit] = useState(12);
  const location = useLocation();

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
        ingredient => {
          if (typeof ingredient === 'string') {
            return ingredient.toLowerCase().includes(lowerCaseQuery);
          } else if (ingredient && typeof ingredient === 'object') {
            // Check if the object has a name property
            return 'name' in ingredient && 
              String(ingredient.name).toLowerCase().includes(lowerCaseQuery);
          }
          return false;
        }
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
    // Update URL search params for new search
    const currentSearchParams = new URLSearchParams(location.search);
    currentSearchParams.set("q", newQuery);
    
    // Replace current URL with new search params
    window.history.replaceState(
      {}, 
      '', 
      `${location.pathname}?${currentSearchParams.toString()}`
    );
    
    // No need to navigate since we're just updating the URL
    // The useEffect will handle updating the filtered smoothies
  };

  const handleImageUpload = (file: File) => {
    console.log("Image search with:", file.name);
    // Image search functionality will be implemented later
  };

  const handleFilterSelect = (filterType: string, values: string[]) => {
    console.log(`Filter ${filterType} selected:`, values);
    // Filter functionality will be implemented later
  };

  const handleDietaryToggle = (option: string, active: boolean) => {
    console.log("Dietary option toggled:", option, active);
    // Dietary filter functionality will be implemented later
  };

  const handleUrlSubmit = (url: string) => {
    console.log("URL submitted:", url);
    // URL processing functionality will be implemented later
  };

  return (
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
  );
};

export default SearchResultsPage;
