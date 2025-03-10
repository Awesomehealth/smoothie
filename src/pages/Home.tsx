
import CategorySidebar from "@/components/CategorySidebar";
import SearchSection from "@/components/sections/SearchSection";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import SmoothieSearchContainer from "@/containers/SmoothieSearchContainer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Awesome Kitchen - Home</title>
        <meta name="description" content="Find delicious smoothie recipes for every lifestyle" />
        <meta property="og:title" content="Awesome Kitchen - Home" />
        <meta property="og:description" content="Find delicious smoothie recipes for every lifestyle" />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>
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
};

export default Home;
