
import { motion } from "framer-motion";
import FilterButton from "@/components/FilterButton";
import ToggleSwitch from "@/components/ToggleSwitch";
import { 
  proteinOptions, 
  dietOptions, 
  proteinAmounts, 
  carbAmounts, 
  fatAmounts, 
  calorieRanges 
} from "@/data/smoothies";

interface DietaryPreferences {
  isGlutenFree: boolean;
  isNutFree: boolean;
  isSoyFree: boolean;
  isSugarFree: boolean;
  hasCaffeine: boolean;
  isMealReplacement: boolean;
}

interface FilterSectionProps {
  onFilterSelect: (filterType: string, value: string) => void;
  onDietaryToggle: (preference: keyof DietaryPreferences, isChecked: boolean) => void;
}

const FilterSection = ({ onFilterSelect, onDietaryToggle }: FilterSectionProps) => {
  return (
    <div className="container px-4 mx-auto">
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FilterButton 
          label="Protein Type" 
          options={proteinOptions} 
          onSelect={(option) => onFilterSelect("proteinType", option)} 
        />
        <FilterButton 
          label="Type of Diet" 
          options={dietOptions} 
          onSelect={(option) => onFilterSelect("diet", option)} 
        />
        <FilterButton 
          label="Protein" 
          options={proteinAmounts} 
          onSelect={(option) => onFilterSelect("protein", option)} 
        />
        <FilterButton 
          label="Carbs" 
          options={carbAmounts} 
          onSelect={(option) => onFilterSelect("carbs", option)} 
        />
        <FilterButton 
          label="Fats" 
          options={fatAmounts} 
          onSelect={(option) => onFilterSelect("fats", option)} 
        />
        <FilterButton 
          label="Calories" 
          options={calorieRanges} 
          onSelect={(option) => onFilterSelect("calories", option)} 
        />
      </motion.div>

      <motion.div 
        className="max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Dietary Preferences</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ToggleSwitch 
            label="Meal Replacement" 
            onChange={(isChecked) => onDietaryToggle("isMealReplacement", isChecked)} 
          />
          <ToggleSwitch 
            label="Gluten-Free" 
            onChange={(isChecked) => onDietaryToggle("isGlutenFree", isChecked)} 
          />
          <ToggleSwitch 
            label="Nut-Free" 
            onChange={(isChecked) => onDietaryToggle("isNutFree", isChecked)} 
          />
          <ToggleSwitch 
            label="Soy-Free" 
            onChange={(isChecked) => onDietaryToggle("isSoyFree", isChecked)} 
          />
          <ToggleSwitch 
            label="Sugar Free" 
            onChange={(isChecked) => onDietaryToggle("isSugarFree", isChecked)} 
          />
          <ToggleSwitch 
            label="Caffeine" 
            onChange={(isChecked) => onDietaryToggle("hasCaffeine", isChecked)} 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FilterSection;
