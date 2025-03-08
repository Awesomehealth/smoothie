
import { Category } from "@/data/categories";

interface CategoryHeaderProps {
  category: Category | undefined;
  isPostWorkout: boolean;
}

const CategoryHeader = ({ category, isPostWorkout }: CategoryHeaderProps) => {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-3xl font-bold">{category?.name || "Category"}</h1>
        {isPostWorkout && <span className={`px-2 py-1 text-xs font-medium rounded-full ${category?.tagStyle}`}>{category?.tag}</span>}
      </div>
      <p className="text-gray-600 max-w-2xl">
        {isPostWorkout 
          ? "Replenish your energy and support muscle recovery with these nutritious post-workout smoothies designed to maximize your fitness results."
          : `Explore our collection of ${category?.name} smoothies.`
        }
      </p>
    </header>
  );
};

export default CategoryHeader;
