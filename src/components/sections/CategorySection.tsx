
import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";

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

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          Popular Categories
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Explore our most popular smoothie collections
        </p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <CategoryCard 
              key={category.id} 
              category={category}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
