
import { Smoothie } from '../types';

export const mealReplacementSmoothies: Smoothie[] = [
  {
    id: "green-machine",
    name: "Green Machine Detox Smoothie",
    description: "Packed with nutrients from spinach, kale, and avocado, this smoothie is perfect for a nutritious breakfast.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cup spinach",
      "1/2 cup kale",
      "1/4 avocado",
      "1 scoop plant protein",
      "1 cup coconut water",
      "1/2 green apple",
      "1 tbsp lemon juice"
    ],
    categories: ["meal-replacement", "weight-loss"],
    nutrition: {
      calories: 250,
      protein: 18,
      carbs: 25,
      fat: 10
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["plant"]
  },
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
    id: "peanut-butter-banana-complete",
    name: "Peanut Butter Banana Complete",
    description: "A filling meal replacement with the perfect balance of protein, carbs, and healthy fats.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 banana",
      "2 tbsp natural peanut butter",
      "1 scoop chocolate protein powder",
      "1 cup oat milk",
      "1 tbsp chia seeds",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["meal-replacement", "high-protein"],
    nutrition: {
      calories: 420,
      protein: 30,
      carbs: 45,
      fat: 18
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey", "plant", "peanut"]
  },
  {
    id: "berry-oatmeal-smoothie",
    name: "Berry Oatmeal Smoothie Bowl",
    description: "A hearty breakfast replacement with the staying power of oats and antioxidants from fresh berries.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1/2 cup rolled oats (soaked overnight)",
      "1 cup mixed berries",
      "1 scoop vanilla protein powder",
      "1 cup almond milk",
      "1 tbsp flaxseed meal",
      "1 tbsp honey",
      "Toppings: fresh berries, granola, sliced almonds"
    ],
    categories: ["meal-replacement", "breakfast"],
    nutrition: {
      calories: 390,
      protein: 25,
      carbs: 55,
      fat: 12
    },
    dietaryInfo: {
      isGlutenFree: false,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey", "plant"]
  },
  {
    id: "greek-yogurt-power-meal",
    name: "Greek Yogurt Power Meal",
    description: "A protein-packed meal replacement with Greek yogurt, fruits, and honey for sustained energy.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 banana",
      "1/2 cup strawberries",
      "1 scoop vanilla protein powder",
      "1 tbsp honey",
      "1 tbsp ground flaxseed",
      "Ice cubes (optional)"
    ],
    categories: ["meal-replacement", "high-protein"],
    nutrition: {
      calories: 380,
      protein: 35,
      carbs: 40,
      fat: 8
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey", "plant"]
  },
  {
    id: "chocolate-avocado-complete",
    name: "Chocolate Avocado Complete Meal",
    description: "Rich chocolate flavor with avocado providing healthy fats and creamy texture for a satisfying meal.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1/2 ripe avocado",
      "1 scoop chocolate protein powder",
      "1 tbsp cacao powder",
      "1 cup almond milk",
      "1 tbsp maple syrup",
      "1 tsp vanilla extract",
      "Ice cubes"
    ],
    categories: ["meal-replacement", "keto"],
    nutrition: {
      calories: 370,
      protein: 25,
      carbs: 20,
      fat: 24
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
    id: "tropical-meal-paradise",
    name: "Tropical Meal Paradise",
    description: "A tropical-flavored complete meal with mango, pineapple, and coconut protein.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1/2 cup mango chunks",
      "1/2 cup pineapple chunks",
      "1 scoop coconut-flavored protein powder",
      "1 cup coconut milk",
      "1 tbsp chia seeds",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["meal-replacement", "tropical"],
    nutrition: {
      calories: 340,
      protein: 22,
      carbs: 40,
      fat: 14
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey", "plant"]
  }
];
