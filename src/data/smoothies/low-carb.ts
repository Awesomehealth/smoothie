
import { Smoothie } from '../types';

export const lowCarbSmoothies: Smoothie[] = [
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
    id: "cucumber-lime-recovery",
    name: "Cucumber Lime Recovery",
    description: "Light, refreshing and hydrating post-workout shake that replenishes electrolytes and fluids.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cucumber, peeled and chopped",
      "Juice of 1 lime",
      "1 scoop unflavored protein powder",
      "1 cup coconut water",
      "1 tbsp honey",
      "Handful of mint leaves",
      "Pinch of salt",
      "Ice cubes"
    ],
    categories: ["post-workout", "hydration", "low-carb"],
    nutrition: {
      calories: 220,
      protein: 22,
      carbs: 25,
      fat: 2
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
    id: "berry-protein-bowl",
    name: "Berry Protein Bowl",
    description: "A refreshing low-carb protein bowl with mixed berries and coconut cream.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 cup mixed berries",
      "1 scoop vanilla protein powder",
      "1/2 cup coconut cream",
      "1 tbsp chia seeds",
      "1 tbsp almond butter",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["low-carb", "meal-replacement"],
    nutrition: {
      calories: 320,
      protein: 25,
      carbs: 15,
      fat: 22
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey"]
  },
  {
    id: "spinach-collagen-smoothie",
    name: "Spinach Collagen Smoothie",
    description: "A nutrient-dense, low-carb smoothie that supports skin health and provides essential nutrients.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "2 cups spinach",
      "1 scoop collagen peptides",
      "1/2 avocado",
      "1 cup unsweetened almond milk",
      "1 tbsp lemon juice",
      "1/2 cucumber",
      "Ice cubes"
    ],
    categories: ["low-carb", "specialty"],
    nutrition: {
      calories: 280,
      protein: 18,
      carbs: 12,
      fat: 20
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: true,
      hasCaffeine: false,
      isMealReplacement: false
    },
    proteinType: ["collagen"]
  },
  {
    id: "chocolate-almond-low-carb",
    name: "Chocolate Almond Low-Carb Shake",
    description: "Rich chocolate flavor with healthy fats from almonds, perfect for satisfying cravings on a low-carb diet.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1 scoop chocolate protein powder",
      "1 cup unsweetened almond milk",
      "1 tbsp almond butter",
      "1 tbsp cocoa powder",
      "1/2 tsp cinnamon",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["low-carb", "keto"],
    nutrition: {
      calories: 290,
      protein: 25,
      carbs: 10,
      fat: 18
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
    id: "coconut-matcha-low-carb",
    name: "Coconut Matcha Low-Carb Smoothie",
    description: "Energizing matcha with the creamy texture of coconut and MCT oil for sustained energy without the carbs.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 tsp matcha powder",
      "1 cup unsweetened coconut milk",
      "1 scoop vanilla protein powder",
      "1 tbsp MCT oil",
      "1/2 avocado",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["low-carb", "specialty"],
    nutrition: {
      calories: 330,
      protein: 20,
      carbs: 8,
      fat: 26
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
    id: "strawberry-coconut-low-carb",
    name: "Strawberry Coconut Low-Carb Shake",
    description: "Fresh strawberries add natural sweetness to this creamy coconut shake without adding many carbs.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 cup strawberries",
      "1 cup unsweetened coconut milk",
      "1 scoop vanilla protein powder",
      "1 tbsp coconut oil",
      "1 tbsp chia seeds",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["low-carb", "keto"],
    nutrition: {
      calories: 310,
      protein: 20,
      carbs: 12,
      fat: 22
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
    id: "mint-chocolate-chip-low-carb",
    name: "Mint Chocolate Chip Low-Carb Smoothie",
    description: "Refreshing mint flavor with chocolate protein and cacao nibs for a guilt-free dessert experience.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1 scoop chocolate protein powder",
      "1 cup unsweetened almond milk",
      "1/4 avocado",
      "1/4 tsp peppermint extract",
      "1 tbsp cacao nibs",
      "Stevia to taste",
      "Ice cubes"
    ],
    categories: ["low-carb", "specialty"],
    nutrition: {
      calories: 280,
      protein: 25,
      carbs: 10,
      fat: 16
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
  }
];
