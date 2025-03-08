
import { Smoothie } from '../types';

export const preWorkoutSmoothies: Smoothie[] = [
  {
    id: "tropical-dream",
    name: "Tropical Dream Protein Shake",
    description: "A tropical blend of mango, pineapple, and coconut with a scoop of protein for sustained energy.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1/2 cup mango chunks",
      "1/2 cup pineapple chunks",
      "1 scoop vanilla protein powder",
      "1 cup coconut milk",
      "1 tbsp shredded coconut",
      "1 tsp honey"
    ],
    categories: ["pre-workout", "high-protein"],
    nutrition: {
      calories: 380,
      protein: 22,
      carbs: 40,
      fat: 12
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: false,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "coffee-protein",
    name: "Coffee Protein Breakfast Shake",
    description: "Jump-start your day with this coffee-infused protein shake that combines caffeine and nutrition.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1/2 cup cold brew coffee",
      "1/2 cup milk of choice",
      "1 scoop vanilla protein powder",
      "1 frozen banana",
      "1 tbsp chia seeds",
      "1/2 tsp cinnamon",
      "Ice cubes"
    ],
    categories: ["pre-workout", "meal-replacement"],
    nutrition: {
      calories: 280,
      protein: 22,
      carbs: 30,
      fat: 6
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: true,
      isMealReplacement: true
    },
    proteinType: ["whey", "plant"]
  },
  {
    id: "matcha-recovery",
    name: "Matcha Recovery Shake",
    description: "Green tea antioxidants combined with protein for recovery and gentle energy boost without caffeine crash.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 tsp matcha powder",
      "1 scoop vanilla protein powder",
      "1 cup almond milk",
      "1/2 banana",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["post-workout", "energy"],
    nutrition: {
      calories: 260,
      protein: 24,
      carbs: 25,
      fat: 6
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  }
];
