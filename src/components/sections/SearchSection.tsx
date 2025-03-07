
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

const SearchSection = ({ onSearch }: SearchSectionProps) => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-20">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find Your Perfect Smoothie
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Discover delicious, nutritious smoothie recipes tailored to your taste and health goals.
        </p>
        <SearchBar onSearch={onSearch} />
      </motion.div>
    </section>
  );
};

export default SearchSection;
