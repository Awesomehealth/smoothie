import { CategoriesType } from "@/types/categories";


interface CategoryHeaderProps {
  category: CategoriesType | undefined;
  isPostWorkout: boolean;
}

const CategoryHeader = ({ category, isPostWorkout }: CategoryHeaderProps) => {
  // Get category-specific description
  const getCategoryDescription = (categoryId: string | undefined) => {
    switch (categoryId) {
      case 'post-workout':
        return "Replenish your energy and support muscle recovery with these nutritious post-workout smoothies designed to maximize your fitness results.";
      case 'meal-replacement':
        return "Complete nutrition in a glass - these balanced meal replacement smoothies provide all the nutrients you need when you're on the go.";
      case 'weight-loss':
        return "Support your weight loss journey with these low-calorie, nutrient-dense smoothies designed to keep you full and satisfied.";
      case 'muscle-gain':
        return "Protein-packed smoothies formulated to support muscle growth and recovery, perfect for bulking phases.";
      case 'high-protein':
        return "Meet your daily protein goals with these delicious high-protein smoothies that don't compromise on taste.";
      case 'low-carb':
        return "Keep your carb intake in check while enjoying flavorful smoothies packed with healthy fats and proteins.";
      case 'keto':
        return "Stay in ketosis with these keto-friendly smoothies high in healthy fats and low in carbs.";
      case 'pre-workout':
        return "Boost your energy and focus with these pre-workout smoothies designed to enhance your performance.";
      default:
        return `Explore our collection of ${category?.main_title} smoothies.`;
    }
  };

  return (
    <header className="mb-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <h1 className="text-3xl font-bold">{category?.main_title || "Category"}</h1>
        {category?.tags && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${category.tag_style}`}>
            {category.tags}
          </span>
        )}
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {/* {getCategoryDescription(category?.id)} */}
        {category.main_description}
      </p>
    </header>
  );
};

export default CategoryHeader;
