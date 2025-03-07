
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";

interface DietaryToggleProps {
  onDietaryToggle: (preference: string, isChecked: boolean) => void;
}

const DietaryToggle = ({ onDietaryToggle }: DietaryToggleProps) => {
  return (
    <motion.div 
      className="max-w-3xl mx-auto mt-8 px-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* First row of toggles */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <ToggleItem 
          label="Meal Replacement" 
          prefId="isMealReplacement" 
          onToggle={onDietaryToggle}
        />
        
        <ToggleItem 
          label="Nut-Free" 
          prefId="isNutFree" 
          onToggle={onDietaryToggle}
        />
        
        <ToggleItem 
          label="Caffeine" 
          prefId="hasCaffeine" 
          onToggle={onDietaryToggle}
        />
      </div>

      {/* Second row of toggles */}
      <div className="grid grid-cols-3 gap-6">
        <ToggleItem 
          label="Gluten-Free" 
          prefId="isGlutenFree" 
          onToggle={onDietaryToggle}
        />
        
        <ToggleItem 
          label="Soy-Free" 
          prefId="isSoyFree" 
          onToggle={onDietaryToggle}
        />
        
        <ToggleItem 
          label="Sugar Free" 
          prefId="isSugarFree" 
          onToggle={onDietaryToggle}
        />
      </div>
    </motion.div>
  );
};

interface ToggleItemProps {
  label: string;
  prefId: string;
  onToggle: (preference: string, isChecked: boolean) => void;
}

const ToggleItem = ({ label, prefId, onToggle }: ToggleItemProps) => {
  return (
    <div className="flex items-center">
      <label className="inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          onChange={(e) => onToggle(prefId, e.target.checked)}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        <span className="ml-3 text-sm font-medium text-gray-700 whitespace-nowrap">{label}</span>
      </label>
    </div>
  );
};

export default DietaryToggle;
