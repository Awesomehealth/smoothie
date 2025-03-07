
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import SearchBar from "@/components/SearchBar";
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
  onFilterSelect?: (filterType: string, value: string) => void;
  onDietaryToggle?: (preference: string, isChecked: boolean) => void;
}

const SearchSection = ({ onSearch, onFilterSelect, onDietaryToggle }: SearchSectionProps) => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  
  const toggleFilter = (filter: string) => {
    setOpenFilter(openFilter === filter ? null : filter);
  };

  const handleFilterSelect = (filterType: string, value: string) => {
    if (onFilterSelect) {
      onFilterSelect(filterType, value);
    }
    setOpenFilter(null);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find Your Perfect Smoothie
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Discover delicious, nutritious smoothie recipes tailored to your taste and health goals.
        </p>
        <SearchBar onSearch={onSearch} />
        
        {/* Filter Buttons - First Row (3 filters) */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Protein Type Filter */}
          <div className="relative">
            <button 
              onClick={() => toggleFilter('proteinType')}
              className="rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 flex items-center gap-2"
            >
              PROTEIN TYPE <ChevronDown size={16} />
            </button>
            {openFilter === 'proteinType' && (
              <div className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {proteinOptions.map((option) => (
                    <button
                      key={option}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleFilterSelect('proteinType', option)}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Diet Type Filter */}
          <div className="relative">
            <button 
              onClick={() => toggleFilter('diet')}
              className="rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 flex items-center gap-2"
            >
              TYPE OF DIET <ChevronDown size={16} />
            </button>
            {openFilter === 'diet' && (
              <div className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {dietOptions.map((option) => (
                    <button
                      key={option}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleFilterSelect('diet', option)}
                    >
                      {option.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-')}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Protein Amount Filter */}
          <div className="relative">
            <button 
              onClick={() => toggleFilter('protein')}
              className="rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 flex items-center gap-2"
            >
              PROTEIN <ChevronDown size={16} />
            </button>
            {openFilter === 'protein' && (
              <div className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {proteinAmounts.map((option) => (
                    <button
                      key={option}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleFilterSelect('protein', option)}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Filter Buttons - Second Row (3 filters) */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Carbs Filter */}
          <div className="relative">
            <button 
              onClick={() => toggleFilter('carbs')}
              className="rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 flex items-center gap-2"
            >
              CARBS <ChevronDown size={16} />
            </button>
            {openFilter === 'carbs' && (
              <div className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {carbAmounts.map((option) => (
                    <button
                      key={option}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleFilterSelect('carbs', option)}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Fats Filter */}
          <div className="relative">
            <button 
              onClick={() => toggleFilter('fats')}
              className="rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 flex items-center gap-2"
            >
              FATS <ChevronDown size={16} />
            </button>
            {openFilter === 'fats' && (
              <div className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {fatAmounts.map((option) => (
                    <button
                      key={option}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleFilterSelect('fats', option)}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Calories Filter */}
          <div className="relative">
            <button 
              onClick={() => toggleFilter('calories')}
              className="rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 flex items-center gap-2"
            >
              CALORIES <ChevronDown size={16} />
            </button>
            {openFilter === 'calories' && (
              <div className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {calorieRanges.map((option) => (
                    <button
                      key={option}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleFilterSelect('calories', option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Dietary Toggles */}
        <motion.div 
          className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                onChange={(e) => onDietaryToggle && onDietaryToggle('isMealReplacement', e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-sm font-medium text-gray-700">Meal Replacement</span>
            </label>
          </div>
          
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                onChange={(e) => onDietaryToggle && onDietaryToggle('isNutFree', e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-sm font-medium text-gray-700">Nut-Free</span>
            </label>
          </div>
          
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                onChange={(e) => onDietaryToggle && onDietaryToggle('hasCaffeine', e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-sm font-medium text-gray-700">Caffeine</span>
            </label>
          </div>
          
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                onChange={(e) => onDietaryToggle && onDietaryToggle('isGlutenFree', e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-sm font-medium text-gray-700">Gluten-Free</span>
            </label>
          </div>
          
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                onChange={(e) => onDietaryToggle && onDietaryToggle('isSoyFree', e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-sm font-medium text-gray-700">Soy-Free</span>
            </label>
          </div>
          
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                onChange={(e) => onDietaryToggle && onDietaryToggle('isSugarFree', e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-sm font-medium text-gray-700">Sugar Free</span>
            </label>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SearchSection;
