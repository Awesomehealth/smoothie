
import { useState } from "react";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SmartSearchProps {
  onSuggestionSelect: (suggestion: string) => void;
}

const SmartSearch = ({ onSuggestionSelect }: SmartSearchProps) => {
  const [showInfo, setShowInfo] = useState(false);
  
  // Removed the suggestions array and buttons

  return (
    <motion.div 
      className="mb-6 px-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {showInfo && (
          <motion.div 
            className="bg-gray-100 p-3 rounded-lg text-xs text-gray-700 mb-3 border border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            Try our AI-powered search with text, images, or by importing from a URL.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SmartSearch;
