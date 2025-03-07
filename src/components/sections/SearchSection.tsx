
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
}

const SearchSection = ({ 
  onSearch, 
  onImageUpload, 
  onFilterSelect, 
  onDietaryToggle 
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

  const firstRowFilters = [
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
    }
  ];

  const secondRowFilters = [
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
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Power Your Day with the Best Smoothies
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Discover delicious, nutritious smoothie recipes tailored to your taste and health goals.
        </p>
        <SearchBar onSearch={onSearch} onImageUpload={onImageUpload} />
        
        {/* First Row of Filters */}
        <FilterRow 
          filters={firstRowFilters} 
          onFilterSelect={handleFilterSelect} 
          delay={0.2}
        />

        {/* Second Row of Filters */}
        <FilterRow 
          filters={secondRowFilters} 
          onFilterSelect={handleFilterSelect} 
          delay={0.3}
        />

        {/* Dietary Toggles */}
        {onDietaryToggle && (
          <DietaryToggle onDietaryToggle={handleDietaryToggle} />
        )}
      </motion.div>
    </section>
  );
};

export default SearchSection;
