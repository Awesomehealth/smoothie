
import { Smoothie } from "@/data/types";
import SmoothieCard from "./SmoothieCard";
import { Button } from "./ui/button";

interface SmoothieListProps {
  smoothies: Smoothie[];
  searchQuery: string;
  currentCategory?: string;
  displayLimit?: number;
  onLoadMore?: () => void;
  hasMoreItems?: boolean;
}

const SmoothieList = ({
  smoothies,
  searchQuery,
  currentCategory,
  displayLimit = 6, // Default to 6 if not specified
  onLoadMore,
  hasMoreItems = false
}: SmoothieListProps) => {
  // Get only the smoothies up to the display limit
  const displayedSmoothies = smoothies.slice(0, displayLimit);

  if (smoothies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          {
            searchQuery ? `No smoothies found for "${searchQuery}" in this category.` : 'No smoothies found'
          } </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedSmoothies.map((smoothie) => (
          <SmoothieCard
            key={smoothie.id}
            smoothie={smoothie}
            currentCategory={currentCategory}
          />
        ))}
      </div>

      {/* Show the "See More" button only if there are more items to display - Updated to black background with white text */}
      {onLoadMore && hasMoreItems && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={onLoadMore}
            className="px-8 py-2 bg-black hover:bg-gray-800 text-white"
          >
            See More
          </Button>
        </div>
      )}
    </div>
  );
};

export default SmoothieList;
