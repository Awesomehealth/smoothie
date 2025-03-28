
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
      <div className="flex flex-col items-center gap-6">
        {/* First row of toggles */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-6 w-full max-w-2xl mx-auto">
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
            label="Caffeine-Free" 
            prefId="isCaffeineFree" 
            onToggle={onDietaryToggle}
          />
        
          {/* Second row integrated into the same grid */}
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
            label="Sugar-Free" 
            prefId="isSugarFree" 
            onToggle={onDietaryToggle}
          />
        </div>
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
        <Switch 
          id={prefId}
          onCheckedChange={(checked) => onToggle(prefId, checked)}
          className="data-[state=checked]:bg-green-600"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 whitespace-nowrap">{label}</span>
      </label>
    </div>
  );
};

export default DietaryToggle;
