
import { useState } from "react";
import { Sparkles, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SmartSearchProps {
  onSuggestionSelect: (suggestion: string) => void;
}

const SmartSearch = ({ onSuggestionSelect }: SmartSearchProps) => {
  const [showInfo, setShowInfo] = useState(false);
  
  const suggestions = [
    "Post-workout recovery smoothie",
    "High-protein breakfast smoothie",
    "Green detox smoothie",
    "Keto-friendly smoothie",
    "Energy-boosting smoothie",
    "Weight loss smoothie",
  ];

  return (
    <motion.div 
      className="mb-6 px-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Sparkles className="h-4 w-4 text-coral-500 mr-2" />
          <h3 className="text-sm font-medium text-gray-700">AI-Powered Suggestions</h3>
        </div>
        <button 
          className="text-gray-500 hover:text-gray-700" 
          onClick={() => setShowInfo(!showInfo)}
          aria-label="Toggle info"
        >
          <Info className="h-4 w-4" />
        </button>
      </div>
      
      <AnimatePresence>
        {showInfo && (
          <motion.div 
            className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600 mb-3"
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
      
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionSelect(suggestion)}
            className="text-xs bg-white border border-gray-200 hover:border-coral-300 rounded-full px-3 py-1 text-gray-700 hover:bg-coral-50 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default SmartSearch;
