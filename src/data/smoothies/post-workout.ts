
import { Smoothie } from '../types';

export const postWorkoutSmoothies: Smoothie[] = [
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
    id: "banana-recovery",
    name: "Banana Recovery Shake",
    description: "Rich in potassium and protein, this banana shake helps replenish electrolytes lost during intense workouts.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "2 ripe bananas",
      "1 scoop vanilla protein powder",
      "1 cup Greek yogurt",
      "1 cup almond milk",
      "1 tbsp honey",
      "1/4 tsp cinnamon"
    ],
    categories: ["post-workout", "high-protein"],
    nutrition: {
      calories: 340,
      protein: 28,
      carbs: 45,
      fat: 6
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
    id: "cherry-muscle-recovery",
    name: "Cherry Muscle Recovery",
    description: "Tart cherries contain anti-inflammatory compounds that help reduce muscle soreness and aid recovery.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1 cup tart cherries",
      "1 scoop vanilla protein powder",
      "1 cup coconut water",
      "1/2 banana",
      "1 tbsp flax seeds",
      "Ice cubes"
    ],
    categories: ["post-workout", "anti-inflammatory"],
    nutrition: {
      calories: 290,
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
    id: "blueberry-recovery",
    name: "Blueberry Recovery Boost",
    description: "Antioxidant-rich blueberries help combat exercise-induced oxidative stress while protein rebuilds muscle.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 cup blueberries",
      "1 scoop vanilla protein powder",
      "1 cup almond milk",
      "1/2 cup Greek yogurt",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["post-workout", "antioxidant"],
    nutrition: {
      calories: 310,
      protein: 26,
      carbs: 36,
      fat: 7
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
    id: "watermelon-hydrator",
    name: "Watermelon Hydration Shake",
    description: "Replenish fluids and electrolytes with this refreshing watermelon smoothie that's perfect after sweaty workouts.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "2 cups watermelon chunks",
      "1 scoop unflavored protein powder",
      "1 cup coconut water",
      "Juice of 1 lime",
      "1 tbsp honey",
      "Pinch of salt",
      "Ice cubes"
    ],
    categories: ["post-workout", "hydration"],
    nutrition: {
      calories: 260,
      protein: 20,
      carbs: 42,
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
    id: "chocolate-banana-recovery",
    name: "Chocolate Banana Recovery",
    description: "The perfect combination of protein, carbs, and electrolytes to maximize your post-workout recovery.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "1 banana",
      "1 scoop chocolate protein powder",
      "1 cup milk",
      "1 tbsp cocoa powder",
      "1 tbsp honey",
      "Ice cubes"
    ],
    categories: ["post-workout", "high-protein"],
    nutrition: {
      calories: 325,
      protein: 27,
      carbs: 40,
      fat: 5
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
    id: "pineapple-coconut-recovery",
    name: "Pineapple Coconut Recovery",
    description: "Tropical flavors combined with recovery-boosting ingredients to help repair muscles after intense training.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cup pineapple chunks",
      "1 scoop vanilla protein powder",
      "1 cup coconut milk",
      "1 tbsp coconut flakes",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["post-workout", "tropical"],
    nutrition: {
      calories: 340,
      protein: 24,
      carbs: 32,
      fat: 14
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
    id: "ginger-turmeric-recovery",
    name: "Ginger Turmeric Recovery",
    description: "Anti-inflammatory ingredients help reduce post-workout soreness while protein aids muscle repair.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 cup mango chunks",
      "1 scoop vanilla protein powder",
      "1 cup coconut milk",
      "1/2 tsp turmeric",
      "1/4 tsp ginger",
      "1 tsp honey",
      "Pinch of black pepper",
      "Ice cubes"
    ],
    categories: ["post-workout", "anti-inflammatory"],
    nutrition: {
      calories: 315,
      protein: 25,
      carbs: 35,
      fat: 9
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
    id: "apple-cinnamon-recovery",
    name: "Apple Cinnamon Recovery",
    description: "Classic apple pie flavors in a protein-packed recovery shake to satisfy sweet cravings post-workout.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 apple, cored and chopped",
      "1 scoop vanilla protein powder",
      "1 cup almond milk",
      "1/2 tsp cinnamon",
      "1 tbsp almond butter",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["post-workout", "seasonal"],
    nutrition: {
      calories: 295,
      protein: 24,
      carbs: 32,
      fat: 10
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
