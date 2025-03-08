
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
  },
  {
    id: "chocolate-peanut-keto",
    name: "Chocolate Peanut Butter Keto Shake",
    description: "Indulgent chocolate and peanut butter shake that fits perfectly into a ketogenic macronutrient ratio.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1 scoop chocolate protein powder",
      "1 cup unsweetened almond milk",
      "2 tbsp natural peanut butter",
      "1 tbsp cocoa powder",
      "1 tbsp MCT oil",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["keto", "low-carb"],
    nutrition: {
      calories: 380,
      protein: 25,
      carbs: 9,
      fat: 30
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey", "peanut"]
  },
  {
    id: "berry-coconut-keto",
    name: "Berry Coconut Keto Smoothie",
    description: "A refreshing berry smoothie with coconut cream that keeps carbs low while providing antioxidants.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1/2 cup mixed berries",
      "1 cup unsweetened coconut milk",
      "1/4 cup coconut cream",
      "1 scoop vanilla protein powder",
      "1 tbsp MCT oil",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["keto", "antioxidant"],
    nutrition: {
      calories: 360,
      protein: 20,
      carbs: 10,
      fat: 28
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
    id: "vanilla-chai-keto",
    name: "Vanilla Chai Keto Shake",
    description: "Aromatic chai spices blend with creamy vanilla for a comforting keto-friendly treat.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cup unsweetened almond milk",
      "1 scoop vanilla protein powder",
      "1 tbsp MCT oil",
      "1/2 tsp chai spice blend",
      "1/4 tsp vanilla extract",
      "1 tbsp heavy cream",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["keto", "specialty"],
    nutrition: {
      calories: 320,
      protein: 20,
      carbs: 6,
      fat: 25
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "matcha-avocado-keto",
    name: "Matcha Avocado Keto Smoothie",
    description: "Energizing matcha combined with creamy avocado provides a perfect balance of healthy fats and antioxidants.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 tsp matcha powder",
      "1/2 avocado",
      "1 cup unsweetened almond milk",
      "1 scoop vanilla protein powder",
      "1 tbsp MCT oil",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["keto", "antioxidant"],
    nutrition: {
      calories: 340,
      protein: 20,
      carbs: 8,
      fat: 26
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "cinnamon-roll-keto",
    name: "Cinnamon Roll Keto Shake",
    description: "All the warm, comforting flavors of a cinnamon roll without the carbs or sugar.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1 cup unsweetened almond milk",
      "1 scoop vanilla protein powder",
      "1 tbsp MCT oil",
      "1 tbsp cream cheese",
      "1/2 tsp cinnamon",
      "1/4 tsp vanilla extract",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["keto", "specialty"],
    nutrition: {
      calories: 330,
      protein: 20,
      carbs: 5,
      fat: 27
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: false,
      isSugarFree: true,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "cucumber-mint-keto",
    name: "Cucumber Mint Keto Refresher",
    description: "A light, hydrating smoothie that's perfect for hot days while maintaining ketosis.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cucumber, peeled",
      "1/4 avocado",
      "1 cup unsweetened almond milk",
      "1 scoop unflavored protein powder",
      "1 tbsp MCT oil",
      "Fresh mint leaves",
      "Juice of 1/2 lime",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["keto", "hydration"],
    nutrition: {
      calories: 310,
      protein: 20,
      carbs: 7,
      fat: 24
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["whey"]
  },
  {
    id: "key-lime-keto",
    name: "Key Lime Keto Smoothie",
    description: "Tangy and sweet key lime flavor in a creamy, low-carb package.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 cup unsweetened coconut milk",
      "1/4 avocado",
      "1 scoop vanilla protein powder",
      "Juice of 2 key limes",
      "Zest of 1 key lime",
      "1 tbsp MCT oil",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["keto", "specialty"],
    nutrition: {
      calories: 320,
      protein: 20,
      carbs: 8,
      fat: 25
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
  }
];
