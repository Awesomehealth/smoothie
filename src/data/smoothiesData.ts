
import { Smoothie } from './types';

export const smoothies: Smoothie[] = [
  {
    id: "berry-blast",
    name: "Berry Blast Protein Smoothie",
    description: "A delicious blend of mixed berries with vanilla protein powder, perfect for post-workout recovery.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 cup mixed berries",
      "1 scoop vanilla protein powder",
      "1 cup almond milk",
      "1/2 banana",
      "1 tbsp chia seeds",
      "Ice cubes"
    ],
    categories: ["post-workout", "high-protein"],
    nutrition: {
      calories: 320,
      protein: 25,
      carbs: 30,
      fat: 8
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
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
  }
];
