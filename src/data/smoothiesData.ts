
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
  },
  // New post-workout smoothies
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
  },
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
    categories: ["post-workout", "green"],
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
    categories: ["post-workout", "hydration"],
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
