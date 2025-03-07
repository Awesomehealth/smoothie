
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

const SearchSection = ({ onSearch }: SearchSectionProps) => {
  return (
    <section className="hero-section py-20">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Smoothie
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover delicious, nutritious smoothie recipes tailored to your taste and health goals.
          </p>
          <SearchBar onSearch={onSearch} />
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;
