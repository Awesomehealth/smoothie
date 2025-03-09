
import { useState, useEffect } from "react";
import { Smoothie } from "@/data/types";
import { smoothies } from "@/data/smoothiesData";
import SmoothieCard from "@/components/SmoothieCard";

interface RelatedRecipesProps {
  currentSmoothieId: string;
  categories: string[];
}

const RelatedRecipes = ({ currentSmoothieId, categories }: RelatedRecipesProps) => {
  const [relatedSmoothies, setRelatedSmoothies] = useState<Smoothie[]>([]);

  useEffect(() => {
    // Find smoothies that share categories with the current smoothie
    const related = smoothies
      .filter(smoothie => 
        // Don't include the current smoothie
        smoothie.id !== currentSmoothieId &&
        // Only include smoothies that share at least one category
        smoothie.categories.some(category => categories.includes(category))
      )
      // Sort by the number of matching categories (most related first)
      .sort((a, b) => {
        const aMatches = a.categories.filter(cat => categories.includes(cat)).length;
        const bMatches = b.categories.filter(cat => categories.includes(cat)).length;
        return bMatches - aMatches;
      })
      // Take the top 3
      .slice(0, 3);
    
    setRelatedSmoothies(related);
  }, [currentSmoothieId, categories]);

  if (relatedSmoothies.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 px-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">You Might Also Enjoy</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedSmoothies.map((smoothie) => (
          <SmoothieCard 
            key={smoothie.id} 
            smoothie={smoothie}
            currentCategory={categories[0]} // Pass the first category as current
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedRecipes;
