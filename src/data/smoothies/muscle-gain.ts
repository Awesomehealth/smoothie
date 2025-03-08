
import { Smoothie } from '../types';

export const muscleGainSmoothies: Smoothie[] = [
  {
    id: "chocolate-peanut",
    name: "Chocolate Peanut Butter Power Shake",
    description: "A rich, creamy blend of chocolate protein and peanut butter, perfect for muscle gain and recovery.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1 scoop chocolate protein powder",
      "1 tbsp natural peanut butter",
      "1 banana",
      "1 cup oat milk",
      "1 tsp cocoa powder",
      "1/2 tsp cinnamon",
      "Ice cubes"
    ],
    categories: ["muscle-gain", "post-workout"],
    nutrition: {
      calories: 420,
      protein: 30,
      carbs: 35,
      fat: 15
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey", "peanut"]
  },
  {
    id: "vanilla-oat-muscle-repair",
    name: "Vanilla Oat Muscle Repair",
    description: "Slow-release carbs from oats paired with protein for extended muscle recovery benefits.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1/2 cup rolled oats (soaked)",
      "1 scoop vanilla protein powder",
      "1 cup milk",
      "1 banana",
      "1 tbsp honey",
      "1/2 tsp vanilla extract",
      "Ice cubes"
    ],
    categories: ["post-workout", "sustained-energy"],
    nutrition: {
      calories: 385,
      protein: 28,
      carbs: 50,
      fat: 7
    },
    dietaryInfo: {
      isGlutenFree: false,
      isNutFree: true,
      isSoyFree: false,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey"]
  }
];
