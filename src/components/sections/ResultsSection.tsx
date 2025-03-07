
import SmoothieCard from "@/components/SmoothieCard";
import { Smoothie } from "@/data/smoothies";
import { categories } from "@/data/categories";

interface ResultsSectionProps {
  filteredSmoothies: Smoothie[];
  selectedCategory: string | null;
  searchQuery: string;
}

const ResultsSection = ({ 
  filteredSmoothies, 
  selectedCategory, 
  searchQuery 
}: ResultsSectionProps) => {
  return (
    <section className="py-16 bg-smoothie-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          {selectedCategory 
            ? `${categories.find(c => c.id === selectedCategory)?.name || 'Results'}`
            : searchQuery 
              ? `Search Results for "${searchQuery}"`
              : "All Smoothies"
          }
        </h2>
        <p className="text-gray-600 text-center mb-10">
          {filteredSmoothies.length} 
          {filteredSmoothies.length === 1 ? ' recipe' : ' recipes'} found
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSmoothies.length > 0 ? (
            filteredSmoothies.map((smoothie) => (
              <SmoothieCard key={smoothie.id} smoothie={smoothie} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                No smoothies found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
