
import { Smoothie } from '../types';

export const preWorkoutSmoothies: Smoothie[] = [
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
    categories: ["post-workout", "pre-workout", "energy"],
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
  },
  {
    id: "berry-blast-pre",
    name: "Berry Blast Pre-Workout",
    description: "Antioxidant-rich berries with a natural caffeine boost from green tea to energize your workout.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1 scoop vanilla protein powder",
      "1/2 cup brewed green tea (cooled)",
      "1/2 cup almond milk",
      "1 tbsp chia seeds",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["pre-workout", "energy"],
    nutrition: {
      calories: 290,
      protein: 20,
      carbs: 35,
      fat: 8
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey", "plant"]
  },
  {
    id: "beet-power-smoothie",
    name: "Beet Power Smoothie",
    description: "Beet-based smoothie with natural nitrates to boost blood flow and enhance workout performance.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 small beet, cooked and diced",
      "1 banana",
      "1 cup orange juice",
      "1 scoop vanilla protein powder",
      "1 tbsp flaxseeds",
      "1/2 tsp ginger (fresh or ground)",
      "Ice cubes"
    ],
    categories: ["pre-workout", "energy"],
    nutrition: {
      calories: 310,
      protein: 22,
      carbs: 45,
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
    proteinType: ["whey", "plant"]
  },
  {
    id: "apple-cinnamon-energy",
    name: "Apple Cinnamon Energy Shake",
    description: "A warming pre-workout shake with apple and cinnamon that provides steady energy release.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 apple, cored and sliced",
      "1 scoop vanilla protein powder",
      "1 cup oat milk",
      "1 tsp cinnamon",
      "1 tbsp almond butter",
      "1 tsp maple syrup",
      "Ice cubes (optional)"
    ],
    categories: ["pre-workout", "energy"],
    nutrition: {
      calories: 330,
      protein: 25,
      carbs: 40,
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
    proteinType: ["whey", "plant"]
  },
  {
    id: "banana-espresso-kick",
    name: "Banana Espresso Kick",
    description: "Double caffeine kick from espresso and chocolate protein for maximum pre-workout energy.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 banana",
      "1 shot espresso (cooled)",
      "1 scoop chocolate protein powder",
      "3/4 cup almond milk",
      "1 tbsp cacao nibs",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["pre-workout", "energy"],
    nutrition: {
      calories: 290,
      protein: 24,
      carbs: 35,
      fat: 7
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey", "plant"]
  },
  {
    id: "citrus-energy-burst",
    name: "Citrus Energy Burst",
    description: "Vitamin C packed citrus smoothie with natural caffeine from guarana for pre-workout energy.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 orange, peeled and segmented",
      "1/2 grapefruit, peeled and segmented",
      "1 scoop vanilla protein powder",
      "1/2 cup coconut water",
      "1/2 tsp guarana powder (optional)",
      "1 tsp honey",
      "Ice cubes"
    ],
    categories: ["pre-workout", "energy"],
    nutrition: {
      calories: 270,
      protein: 22,
      carbs: 38,
      fat: 4
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: true,
      isMealReplacement: false
    },
    proteinType: ["whey", "plant"]
  }
];
