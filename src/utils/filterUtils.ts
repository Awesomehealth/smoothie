
import { Smoothie } from "@/data/smoothies";

export const filterSmoothies = (
  smoothies: Smoothie[],
  searchQuery: string,
  selectedCategory: string | null,
  filters: Record<string, string>,
  dietaryPreferences: Record<string, boolean>
): Smoothie[] => {
  let result = [...smoothies];

  if (searchQuery) {
    // Handle special prefixed queries
    if (searchQuery.startsWith("url:")) {
      // For URL searches, we'd normally fetch data from an API
      // For now, just use random smoothies as a demo
      result = [...smoothies].sort(() => 0.5 - Math.random()).slice(0, 2);
    } else {
      // Regular text search
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (smoothie) =>
          smoothie.name.toLowerCase().includes(query) ||
          smoothie.description.toLowerCase().includes(query) ||
          smoothie.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query))
      );
    }
  }

  if (selectedCategory) {
    result = result.filter((smoothie) => 
      smoothie.categories.includes(selectedCategory)
    );
  }

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      if (key === "proteinType") {
        result = result.filter((smoothie) => 
          smoothie.proteinType.includes(value as any)
        );
      }
    }
  });

  Object.entries(dietaryPreferences).forEach(([key, isSelected]) => {
    if (isSelected) {
      result = result.filter((smoothie) => 
        smoothie.dietaryInfo[key as keyof typeof smoothie.dietaryInfo]
      );
    }
  });

  if (filters.protein) {
    result = result.filter((smoothie) => {
      const protein = smoothie.nutrition.protein;
      if (filters.protein === "high") return protein > 20;
      if (filters.protein === "medium") return protein >= 10 && protein <= 20;
      if (filters.protein === "low") return protein < 10;
      return true;
    });
  }

  if (filters.carbs) {
    result = result.filter((smoothie) => {
      const carbs = smoothie.nutrition.carbs;
      if (filters.carbs === "high") return carbs > 30;
      if (filters.carbs === "medium") return carbs >= 15 && carbs <= 30;
      if (filters.carbs === "low") return carbs < 15;
      return true;
    });
  }

  if (filters.fats) {
    result = result.filter((smoothie) => {
      const fat = smoothie.nutrition.fat;
      if (filters.fats === "high") return fat > 15;
      if (filters.fats === "medium") return fat >= 8 && fat <= 15;
      if (filters.fats === "low") return fat < 8;
      return true;
    });
  }

  if (filters.calories) {
    result = result.filter((smoothie) => {
      const calories = smoothie.nutrition.calories;
      if (filters.calories === "100-200") return calories >= 100 && calories < 200;
      if (filters.calories === "200-300") return calories >= 200 && calories < 300;
      if (filters.calories === "300-400") return calories >= 300 && calories < 400;
      if (filters.calories === "400-500") return calories >= 400 && calories < 500;
      if (filters.calories === "500+") return calories >= 500;
      return true;
    });
  }

  return result;
};
