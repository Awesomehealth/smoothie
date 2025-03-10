
import { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import { CategoriesProvider } from "@/contexts/CategoriesContext";
import CategorySidebar from "@/components/CategorySidebar";
import SearchSection from "@/components/sections/SearchSection";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import SmoothieSearchContainer from "@/containers/SmoothieSearchContainer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Kitchen - Delicious Smoothie Recipes</title>
        <meta name="description" content="Find delicious smoothie recipes for every lifestyle" />
        <meta name="keywords" content="smoothies, recipes, healthy, protein, workout" />
      </Head>
      <SmoothieSearchContainer>
        {({
          selectedCategory,
          showAdvancedSearch,
          handleCategorySelect,
          handleAdvancedSearchToggle,
          handleSearch,
          handleImageUpload,
          handleFilterSelect,
          handleDietaryToggle
        }) => (
          <SmoothieAppLayout
            sidebar={
              <CategorySidebar
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
                showAdvancedSearch={showAdvancedSearch}
                onAdvancedSearchToggle={handleAdvancedSearchToggle}
              />
            }
            mainContent={
              <div className="h-full flex items-center justify-center">
                <SearchSection
                  onSearch={handleSearch}
                  onImageUpload={handleImageUpload}
                  onFilterSelect={handleFilterSelect}
                  onDietaryToggle={handleDietaryToggle}
                  showAdvancedSearch={showAdvancedSearch}
                />
              </div>
            }
          />
        )}
      </SmoothieSearchContainer>
    </>
  );
}
