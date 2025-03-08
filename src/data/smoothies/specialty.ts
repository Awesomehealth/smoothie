
import { Smoothie } from '../types';

export const specialtySmoothies: Smoothie[] = [
  {
    id: "orange-creamsicle-recovery",
    name: "Orange Creamsicle Recovery",
    description: "Vitamin C rich oranges help with collagen synthesis for muscle repair, while protein rebuilds damaged tissue.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 orange, peeled and segmented",
      "1 scoop vanilla protein powder",
      "1/2 cup Greek yogurt",
      "1/2 cup orange juice",
      "1/2 tsp vanilla extract",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["post-workout", "vitamin-boost"],
    nutrition: {
      calories: 280,
      protein: 26,
      carbs: 35,
      fat: 4
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "honey-yogurt-protein",
    name: "Honey Yogurt Protein Recovery",
    description: "Simple ingredients that pack a powerful recovery punch with the perfect protein-to-carb ratio.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cup Greek yogurt",
      "1 scoop vanilla protein powder",
      "1 banana",
      "2 tbsp honey",
      "1/2 cup milk",
      "Ice cubes"
    ],
    categories: ["post-workout", "high-protein"],
    nutrition: {
      calories: 360,
      protein: 35,
      carbs: 40,
      fat: 5
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "strawberry-banana-recovery",
    name: "Strawberry Banana Recovery",
    description: "A classic flavor combination loaded with recovery-enhancing protein and antioxidants.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 cup strawberries",
      "1 banana",
      "1 scoop vanilla protein powder",
      "1 cup almond milk",
      "1 tbsp honey",
      "Ice cubes"
    ],
    categories: ["post-workout", "antioxidant"],
    nutrition: {
      calories: 295,
      protein: 24,
      carbs: 38,
      fat: 5
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "chocolate-mint-recovery",
    name: "Chocolate Mint Recovery",
    description: "Refreshing mint combined with rich chocolate protein for a dessert-like post-workout treat.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1 scoop chocolate protein powder",
      "1 cup almond milk",
      "2-3 fresh mint leaves",
      "1/4 tsp mint extract",
      "1 tbsp cacao nibs",
      "1/2 frozen banana",
      "Ice cubes"
    ],
    categories: ["post-workout", "dessert"],
    nutrition: {
      calories: 275,
      protein: 25,
      carbs: 25,
      fat: 8
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "cashew-date-protein",
    name: "Cashew Date Protein Shake",
    description: "Natural sweetness from dates with protein and healthy fats for comprehensive post-workout recovery.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1/4 cup cashews (soaked)",
      "3 dates, pitted",
      "1 scoop vanilla protein powder",
      "1 cup almond milk",
      "1/2 tsp cinnamon",
      "Ice cubes"
    ],
    categories: ["post-workout", "whole-food"],
    nutrition: {
      calories: 380,
      protein: 25,
      carbs: 35,
      fat: 18
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
    id: "plant-protein-recovery",
    name: "Plant Protein Complete Recovery",
    description: "Vegan-friendly protein shake with complete amino acid profile for optimal muscle recovery.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1.5 scoops plant protein blend",
      "1 cup unsweetened almond milk",
      "1 banana",
      "1 tbsp hemp seeds",
      "1 tbsp almond butter",
      "1 tsp maple syrup",
      "Ice cubes"
    ],
    categories: ["post-workout", "vegan"],
    nutrition: {
      calories: 350,
      protein: 30,
      carbs: 30,
      fat: 12
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["plant"]
  },
  {
    id: "peanut-butter-jelly-recovery",
    name: "PB&J Recovery Shake",
    description: "The nostalgic sandwich flavor in smoothie form, providing the perfect balance of protein and carbs.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1 cup strawberries",
      "1 tbsp natural peanut butter",
      "1 scoop vanilla protein powder",
      "1 cup milk",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["post-workout", "comfort-food"],
    nutrition: {
      calories: 340,
      protein: 28,
      carbs: 30,
      fat: 12
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: false,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey", "peanut"]
  }
];
