
import { motion } from "framer-motion";

interface DietaryToggleProps {
  onDietaryToggle: (preference: string, isChecked: boolean) => void;
}

const DietaryToggle = ({ onDietaryToggle }: DietaryToggleProps) => {
  return (
    <motion.div 
      className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            onChange={(e) => onDietaryToggle('isMealReplacement', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Meal Replacement</span>
        </label>
      </div>
      
      <div className="flex items-center justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            onChange={(e) => onDietaryToggle('isNutFree', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Nut-Free</span>
        </label>
      </div>
      
      <div className="flex items-center justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            onChange={(e) => onDietaryToggle('hasCaffeine', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Caffeine</span>
        </label>
      </div>
      
      <div className="flex items-center justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            onChange={(e) => onDietaryToggle('isGlutenFree', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Gluten-Free</span>
        </label>
      </div>
      
      <div className="flex items-center justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            onChange={(e) => onDietaryToggle('isSoyFree', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Soy-Free</span>
        </label>
      </div>
      
      <div className="flex items-center justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            onChange={(e) => onDietaryToggle('isSugarFree', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-coral-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Sugar Free</span>
        </label>
      </div>
    </motion.div>
  );
};

export default DietaryToggle;
