
import { Smoothie } from '../types';

export const highProteinSmoothies: Smoothie[] = [
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
  }
];
