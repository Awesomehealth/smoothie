
export interface Smoothie {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  categories: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  dietaryInfo: {
    isGlutenFree: boolean;
    isNutFree: boolean;
    isSoyFree: boolean;
    isSugarFree: boolean;
    hasCaffeine: boolean;
    isMealReplacement: boolean;
  };
  proteinType: string[];
  recipe?: {
    difficulty: "Easy" | "Medium" | "Hard";
    servings: number;
    prepTime: number;
    totalTime: number;
    instructions: string[];
    tips?: string[];
    rating?: number;
    reviews?: number;
  };
}

export type ProteinType = "whey" | "plant" | "egg" | "collagen" | "peanut";
export type DietType = "vegan" | "vegetarian" | "keto" | "paleo" | "gluten-free" | "dairy-free";
export type ProteinAmount = "high" | "medium" | "low";
export type CarbAmount = "high" | "medium" | "low";
export type FatAmount = "high" | "medium" | "low";
export type CalorieRange = "100-200" | "200-300" | "300-400" | "400-500" | "500+";
