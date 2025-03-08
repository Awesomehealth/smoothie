
import CategorySidebar from "@/components/CategorySidebar";
import SearchSection from "@/components/sections/SearchSection";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import SmoothieSearchContainer from "@/containers/SmoothieSearchContainer";

const Index = () => {
  return (
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
  );
};

export default Index;
