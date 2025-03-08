
import { Smoothie } from '../types';

export const ketoSmoothies: Smoothie[] = [
  {
    id: "keto-avocado",
    name: "Keto Avocado Smoothie",
    description: "A low-carb, high-fat smoothie with avocado and MCT oil, perfect for those following a ketogenic diet.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1/2 avocado",
      "1 cup unsweetened almond milk",
      "1 scoop vanilla protein powder",
      "1 tbsp MCT oil",
      "1 tbsp almond butter",
      "1/4 tsp vanilla extract",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["keto", "low-carb", "meal-replacement"],
    nutrition: {
      calories: 350,
      protein: 20,
      carbs: 8,
      fat: 28
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey", "plant"]
  }
];
