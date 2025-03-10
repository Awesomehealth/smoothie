
import { useState } from "react";
import { motion } from "framer-motion";
import { CategoriesType } from "@/types/categories";

interface CategoryCardProps {
  category: CategoriesType;
  isClickable?: boolean;
  onClick?: (categoryId: string) => void;
}

const CategoryCard = ({ category, isClickable = true, onClick }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isClickable && onClick) {
      onClick(category.id);
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl shadow-md group h-56 ${isClickable ? 'cursor-pointer' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 z-10" />
      
      <div 
        className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out"
        style={{ 
          backgroundImage: `url(${category.category_banner_img})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }} 
      />
      
      <div className="absolute top-3 right-3 z-20">
        <span className={`text-xs font-bold py-1 px-3 rounded-full ${category.tag_style}`}>
          {category.tags?.[0]}
        </span>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
        <h3 className="font-bold text-lg mb-1">{category.main_title}</h3>
        <p className="text-sm opacity-90">{category.recipes_count} recipes</p>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
