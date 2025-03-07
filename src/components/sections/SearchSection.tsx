
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import FilterRow from "@/components/search/FilterRow";
import DietaryToggle from "@/components/search/DietaryToggle";
import { 
  proteinOptions, 
  dietOptions, 
  proteinAmounts, 
  carbAmounts, 
  fatAmounts, 
  calorieRanges 
} from "@/data/smoothies";

interface SearchSectionProps {
  onSearch: (query: string) => void;
  onImageUpload?: (file: File) => void;
  onFilterSelect?: (filterType: string, value: string) => void;
  onDietaryToggle?: (preference: string, isChecked: boolean) => void;
  showAdvancedSearch: boolean;
}

const SearchSection = ({ 
  onSearch, 
  onImageUpload, 
  onFilterSelect, 
  onDietaryToggle,
  showAdvancedSearch
}: SearchSectionProps) => {
  const handleFilterSelect = (filterType: string, value: string) => {
    if (onFilterSelect) {
      onFilterSelect(filterType, value);
    }
  };

  const handleDietaryToggle = (preference: string, isChecked: boolean) => {
    if (onDietaryToggle) {
      onDietaryToggle(preference, isChecked);
    }
  };

  const allFilters = [
    {
      label: "PROTEIN TYPE",
      filterType: "proteinType",
      options: proteinOptions
    },
    {
      label: "TYPE OF DIET",
      filterType: "diet",
      options: dietOptions
    },
    {
      label: "PROTEIN",
      filterType: "protein",
      options: proteinAmounts
    },
    {
      label: "CARBS",
      filterType: "carbs",
      options: carbAmounts
    },
    {
      label: "FATS",
      filterType: "fats",
      options: fatAmounts
    },
    {
      label: "CALORIES",
      filterType: "calories",
      options: calorieRanges
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What can I help you make
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          delicious, nutritious smoothie recipes tailored just for your goals
        </p>
        
        <div className="w-full max-w-2xl mx-auto mb-8">
          <SearchBar onSearch={onSearch} onImageUpload={onImageUpload} placeholder="Ask anything..." />
        </div>
        
        {/* Advanced Search Options - controlled by sidebar toggle */}
        {showAdvancedSearch && (
          <div className="space-y-8">
            {/* All Filters in a Single Row */}
            <FilterRow 
              filters={allFilters} 
              onFilterSelect={handleFilterSelect} 
              delay={0.2}
            />

            {/* Dietary Toggles */}
            {onDietaryToggle && (
              <DietaryToggle onDietaryToggle={handleDietaryToggle} />
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default SearchSection;
