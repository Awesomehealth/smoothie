
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Wheat, Droplet, Utensils, ArrowRight, ImageOff } from "lucide-react";
import { motion } from "framer-motion";
import { Smoothie } from "@/data/types";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SmoothieCardProps {
  smoothie: Smoothie;
  currentCategory?: string;
}

const SmoothieCard = ({ smoothie, currentCategory }: SmoothieCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  // Handle image error for smoothie cards
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/placeholder.svg";
    setImageError(true);
  };

  // Use a consistent image for all smoothie cards
  const smoothieImage = "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg";

  // Filter out the current category from the displayed tags
  const displayCategories = currentCategory 
    ? smoothie.categories.filter(cat => cat !== currentCategory)
    : smoothie.categories;
    
  // Recipe link path
  const recipePath = `/recipe/${smoothie.id}`;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        {/* Clickable image section with error handling */}
        <Link to={recipePath} className="block aspect-[4/3] w-full overflow-hidden relative">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <ImageOff className="h-12 w-12 text-gray-400" />
            </div>
          ) : (
            <img 
              src={smoothieImage} 
              alt={smoothie.name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              onError={handleImageError}
            />
          )}
          <div className="absolute top-3 left-3 flex gap-2">
            {displayCategories.map((cat, idx) => (
              <span 
                key={idx} 
                className="px-2 py-1 text-xs font-medium rounded-full bg-white/80 backdrop-blur-sm shadow-sm"
              >
                {cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            ))}
          </div>
        </Link>
        
        <CardContent className="p-5 flex-grow flex flex-col">
          {/* Clickable title */}
          <Link to={recipePath} className="group">
            <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-lavender-700 transition-colors">
              {smoothie.name}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{smoothie.description}</p>
          
          {/* Nutrition facts display */}
          <div className="bg-gray-50 rounded-lg p-3 mb-4 grid grid-cols-4 gap-2">
            <div className="flex flex-col items-center justify-center p-2 rounded-md bg-lavender-50">
              <Trophy className="h-4 w-4 text-lavender-600 mb-1" />
              <span className="text-xs text-gray-500">Protein</span>
              <span className="font-bold text-sm">{smoothie.nutrition.protein}g</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-2 rounded-md bg-mint-50">
              <Wheat className="h-4 w-4 text-mint-600 mb-1" />
              <span className="text-xs text-gray-500">Carbs</span>
              <span className="font-bold text-sm">{smoothie.nutrition.carbs}g</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-2 rounded-md bg-sky-50">
              <Droplet className="h-4 w-4 text-sky-600 mb-1" />
              <span className="text-xs text-gray-500">Fats</span>
              <span className="font-bold text-sm">{smoothie.nutrition.fat}g</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-2 rounded-md bg-coral-50">
              <Utensils className="h-4 w-4 text-coral-600 mb-1" />
              <span className="text-xs text-gray-500">Calories</span>
              <span className="font-bold text-sm">{smoothie.nutrition.calories}</span>
            </div>
          </div>
          
          {/* Button for viewing recipe - Updated to black background with white text */}
          <Link to={recipePath} className="w-full">
            <button className="w-full py-2.5 px-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
              View Recipe
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SmoothieCard;
