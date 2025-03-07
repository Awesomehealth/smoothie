
import { useState } from "react";
import { motion } from "framer-motion";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
  onClick: (categoryId: string) => void;
}

const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(category.id)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
      
      <div 
        className="h-48 bg-cover bg-center transition-transform duration-700 ease-out"
        style={{ 
          backgroundImage: `url(${category.image})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }} 
      />
      
      <div className="absolute top-3 right-3 z-20">
        <span className={`text-xs font-bold py-1 px-3 rounded-full ${category.tagStyle}`}>
          {category.tag}
        </span>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
        <h3 className="font-medium text-lg mb-1">{category.name}</h3>
        <p className="text-sm opacity-90">{category.count} recipes</p>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
