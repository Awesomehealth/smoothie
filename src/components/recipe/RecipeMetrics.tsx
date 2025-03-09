
import { Smoothie } from "@/data/types";

interface RecipeMetricsProps {
  smoothie: Smoothie;
}

const RecipeMetrics = ({ smoothie }: RecipeMetricsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 mb-8">
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-500">Level</p>
        <p className="font-semibold">{smoothie.recipe?.difficulty || "Easy"}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-500">Total Time</p>
        <p className="font-semibold">{smoothie.recipe?.totalTime || 10} min</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-500">Servings</p>
        <p className="font-semibold">{smoothie.recipe?.servings || 1}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-500">Prep Time</p>
        <p className="font-semibold">{smoothie.recipe?.prepTime || 5} min</p>
      </div>
    </div>
  );
};

export default RecipeMetrics;
