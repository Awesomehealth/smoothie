
import { useState } from "react";
import { Sparkles, Info, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SmartSearchProps {
  onSuggestionSelect: (suggestion: string) => void;
}

const SmartSearch = ({ onSuggestionSelect }: SmartSearchProps) => {
  const [showInfo, setShowInfo] = useState(false);
  
  const suggestions = [
    "Hacker News top 100",
    "Slidev presentation",
    "Expense tracker",
    "Recharts dashboard",
  ];

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
            className="bg-gray-800/60 p-3 rounded-lg text-xs text-gray-300 mb-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            Try our AI-powered search by clicking a suggestion, or use the sparkle icon in the search bar 
            for personalized recommendations based on your preferences.
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex flex-wrap gap-2 justify-center">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionSelect(suggestion)}
            className="flex items-center text-sm bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-full px-5 py-2.5 text-gray-300 hover:bg-gray-800 transition-colors"
          >
            {suggestion}
            <ArrowUp className="ml-2 h-3 w-3" />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default SmartSearch;
