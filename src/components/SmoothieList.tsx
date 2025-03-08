
import { Smoothie } from "@/data/types";
import SmoothieCard from "./SmoothieCard";

interface SmoothieListProps {
  smoothies: Smoothie[];
  searchQuery: string;
}

const SmoothieList = ({ smoothies, searchQuery }: SmoothieListProps) => {
  if (smoothies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No smoothies found for "{searchQuery}" in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {smoothies.map((smoothie) => (
        <SmoothieCard key={smoothie.id} smoothie={smoothie} />
      ))}
    </div>
  );
};

export default SmoothieList;
