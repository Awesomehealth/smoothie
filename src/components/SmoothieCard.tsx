
import { useState } from "react";
import { motion } from "framer-motion";
import { Smoothie } from "@/data/smoothies";
import { Flame, Droplet, Wheat, Dumbbell } from "lucide-react";

interface SmoothieCardProps {
  smoothie: Smoothie;
}

const SmoothieCard = ({ smoothie }: SmoothieCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      layout
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={smoothie.image} 
          alt={smoothie.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-0 left-0 right-0 flex justify-between p-3">
          {smoothie.categories.map((category, index) => (
            <span 
              key={index}
              className="text-xs font-medium py-1 px-2.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 shadow-sm"
            >
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{smoothie.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{smoothie.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Flame className="h-4 w-4 text-coral-500 mr-1" />
              <span className="text-xs font-medium">{smoothie.nutrition.calories}</span>
            </div>
            <div className="flex items-center">
              <Dumbbell className="h-4 w-4 text-lavender-500 mr-1" />
              <span className="text-xs font-medium">{smoothie.nutrition.protein}g</span>
            </div>
            <div className="flex items-center">
              <Wheat className="h-4 w-4 text-amber-500 mr-1" />
              <span className="text-xs font-medium">{smoothie.nutrition.carbs}g</span>
            </div>
            <div className="flex items-center">
              <Droplet className="h-4 w-4 text-sky-500 mr-1" />
              <span className="text-xs font-medium">{smoothie.nutrition.fat}g</span>
            </div>
          </div>
        </div>
        
        <button 
          className="w-full py-2 text-sm font-medium text-coral-600 hover:text-coral-700 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
        
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-gray-100"
          >
            <h4 className="font-medium text-sm mb-2 text-gray-700">Ingredients:</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              {smoothie.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="font-medium text-sm mb-2 text-gray-700">Dietary Information:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(smoothie.dietaryInfo).map(([key, value]) => {
                const label = key
                  .replace(/^is|has/, '')
                  .replace(/([A-Z])/g, ' $1')
                  .trim();
                
                return (
                  <div 
                    key={key} 
                    className={`px-2 py-1 rounded-md ${
                      value ? 'bg-mint-100 text-mint-800' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {label}: {value ? 'Yes' : 'No'}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SmoothieCard;
