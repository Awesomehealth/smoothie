
import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { Dumbbell, Utensils, Weight, Flame, Apple, Carrot, HeartPulse, Timer } from "lucide-react";

const CategorySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Map category IDs to corresponding icons
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'post-workout':
        return <HeartPulse className="h-5 w-5 text-coral-500" />;
      case 'meal-replacement':
        return <Utensils className="h-5 w-5 text-coral-500" />;
      case 'weight-loss':
        return <Weight className="h-5 w-5 text-coral-500" />;
      case 'muscle-gain':
        return <Dumbbell className="h-5 w-5 text-coral-500" />;
      case 'high-protein':
        return <Flame className="h-5 w-5 text-coral-500" />;
      case 'low-carb':
        return <Carrot className="h-5 w-5 text-coral-500" />;
      case 'keto':
        return <Apple className="h-5 w-5 text-coral-500" />;
      case 'pre-workout':
        return <Timer className="h-5 w-5 text-coral-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          Explore Smoothie Categories
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Browse our popular smoothie collections
        </p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <div key={category.id} className="relative">
              {getCategoryIcon(category.id) && (
                <div className="absolute top-3 left-3 z-10">
                  {getCategoryIcon(category.id)}
                </div>
              )}
              <CategoryCard 
                category={category}
                isClickable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
