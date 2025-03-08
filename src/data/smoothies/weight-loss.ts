
import { Smoothie } from '../types';

export const weightLossSmoothies: Smoothie[] = [
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
    id: "spinach-avocado-recovery",
    name: "Spinach Avocado Recovery",
    description: "Nutrient-dense greens and healthy fats support recovery and reduce inflammation after tough workouts.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cup spinach",
      "1/4 avocado",
      "1 scoop vanilla protein powder",
      "1 cup almond milk",
      "1/2 banana",
      "1 tbsp lemon juice",
      "Ice cubes"
    ],
    categories: ["post-workout", "green", "weight-loss"],
    nutrition: {
      calories: 290,
      protein: 24,
      carbs: 25,
      fat: 12
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "berry-metabolism-booster",
    name: "Berry Metabolism Booster",
    description: "High protein, low calorie smoothie with metabolism-boosting ingredients to support weight loss goals.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 cup mixed berries",
      "1 scoop vanilla protein powder",
      "1 cup unsweetened almond milk",
      "1/2 tsp cinnamon",
      "1 tsp green tea powder",
      "1 tbsp chia seeds",
      "Ice cubes"
    ],
    categories: ["weight-loss", "antioxidant"],
    nutrition: {
      calories: 220,
      protein: 25,
      carbs: 20,
      fat: 6
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "pineapple-ginger-slim",
    name: "Pineapple Ginger Slim Down",
    description: "Refreshing tropical smoothie with digestive aids to support metabolism and weight management.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cup pineapple chunks",
      "1 scoop vanilla protein powder",
      "1 cup coconut water",
      "1 tsp fresh ginger, grated",
      "1/2 lemon, juiced",
      "1 tbsp ground flaxseed",
      "Ice cubes"
    ],
    categories: ["weight-loss", "digestive-health"],
    nutrition: {
      calories: 210,
      protein: 22,
      carbs: 25,
      fat: 3
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
    id: "chocolate-slim",
    name: "Chocolate Slim Shake",
    description: "Satisfies chocolate cravings while providing high protein and low calories to support weight loss.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1 scoop chocolate protein powder",
      "1 cup unsweetened almond milk",
      "1 tbsp cocoa powder",
      "1/2 frozen banana",
      "1 tbsp ground flaxseed",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["weight-loss", "high-protein"],
    nutrition: {
      calories: 230,
      protein: 25,
      carbs: 20,
      fat: 5
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "green-tea-cucumber-slim",
    name: "Green Tea Cucumber Refresher",
    description: "Ultra-light smoothie with green tea for metabolism support and cucumber for hydration.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cucumber, peeled",
      "1 cup brewed and cooled green tea",
      "1 scoop unflavored protein powder",
      "Juice of 1 lemon",
      "1 tbsp honey",
      "Fresh mint leaves",
      "Ice cubes"
    ],
    categories: ["weight-loss", "hydration"],
    nutrition: {
      calories: 190,
      protein: 20,
      carbs: 15,
      fat: 2
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
  },
  {
    id: "apple-cinnamon-fat-burner",
    name: "Apple Cinnamon Fat Burner",
    description: "Apple and cinnamon provide natural sweetness while supporting metabolism with thermogenic spices.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 apple, cored and chopped",
      "1 scoop vanilla protein powder",
      "1 cup unsweetened almond milk",
      "1 tsp cinnamon",
      "1/4 tsp cayenne pepper (optional)",
      "1 tbsp ground flaxseed",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["weight-loss", "thermogenic"],
    nutrition: {
      calories: 220,
      protein: 24,
      carbs: 22,
      fat: 4
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "cold-brew-protein-slim",
    name: "Cold Brew Protein Slim",
    description: "Coffee-infused protein shake that boosts metabolism and provides sustained energy for workouts.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1/2 cup cold brew coffee",
      "1/2 cup unsweetened almond milk",
      "1 scoop chocolate protein powder",
      "1/2 frozen banana",
      "1 tsp cinnamon",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["weight-loss", "energy"],
    nutrition: {
      calories: 215,
      protein: 25,
      carbs: 18,
      fat: 4
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  }
];
