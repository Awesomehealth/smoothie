
import { motion } from "framer-motion";
import { useState } from "react";
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
import { toast } from "@/components/ui/use-toast";

interface SearchSectionProps {
  onSearch: (query: string) => void;
  onImageUpload?: (file: File) => void;
  onFilterSelect?: (filterType: string, value: string) => void;
  onDietaryToggle?: (preference: string, isChecked: boolean) => void;
  showAdvancedSearch: boolean;
  hideHeading?: boolean;
}

const SearchSection = ({ 
  onSearch, 
  onImageUpload, 
  onFilterSelect, 
  onDietaryToggle,
  showAdvancedSearch,
  hideHeading = false
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

  const handleSearch = (query: string) => {
    onSearch(query);
  };

  const handleUrlSubmit = (url: string) => {
    toast({
      title: "Recipe Extraction",
      description: `Extracting smoothie recipe from ${url}`,
      duration: 3000,
    });
    
    // Simulate processing a URL
    console.log("Processing URL:", url);
    
    // Here we would typically call an API to extract recipe data
    // For now, we'll just perform a regular search with a prefix
    onSearch(`url:${url}`);
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
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Show heading only if not hidden */}
        {!hideHeading && (
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            What are you in mood for?
          </h1>
        )}
        
        <div className="w-full max-w-3xl mx-auto mb-8">
          <SearchBar 
            onSearch={handleSearch} 
            onImageUpload={onImageUpload} 
            onUrlSubmit={handleUrlSubmit}
            placeholder="Smoothie, Shakes, Acai bowl..." 
          />
        </div>
        
        {/* Advanced Search Options - controlled by sidebar toggle */}
        {showAdvancedSearch && (
          <motion.div 
            className="space-y-4 max-w-5xl mx-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default SearchSection;
