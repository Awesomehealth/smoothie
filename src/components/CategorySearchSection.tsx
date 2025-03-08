
import SearchBar from "@/components/SearchBar";
import SearchSection from "@/components/sections/SearchSection";

interface CategorySearchSectionProps {
  categoryName: string;
  showAdvancedSearch: boolean;
  onSearch: (query: string) => void;
  onUrlSubmit: (url: string) => void;
  onFilterSelect: (filterType: string, value: string) => void;
  onDietaryToggle: (preference: string, isChecked: boolean) => void;
}

const CategorySearchSection = ({
  categoryName,
  showAdvancedSearch,
  onSearch,
  onUrlSubmit,
  onFilterSelect,
  onDietaryToggle
}: CategorySearchSectionProps) => {
  return (
    <div className="mb-8">
      {showAdvancedSearch ? (
        <SearchSection 
          onSearch={onSearch}
          onFilterSelect={onFilterSelect}
          onDietaryToggle={onDietaryToggle}
          showAdvancedSearch={showAdvancedSearch}
          hideHeading={true}
        />
      ) : (
        <div className="mb-8 max-w-3xl mx-auto">
          <SearchBar 
            onSearch={onSearch}
            onUrlSubmit={onUrlSubmit}
            placeholder={`Search within ${categoryName || "this category"}...`}
          />
        </div>
      )}
    </div>
  );
};

export default CategorySearchSection;
