
import { Smoothie } from '../types';

export const muscleGainSmoothies: Smoothie[] = [
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
    categories: ["post-workout", "sustained-energy", "muscle-gain"],
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
    id: "triple-berry-mass-gainer",
    name: "Triple Berry Mass Gainer",
    description: "High-calorie smoothie with mixed berries and oats to support muscle building and weight gain.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 cup mixed berries",
      "2 scoops vanilla protein powder",
      "1 cup whole milk",
      "1/2 cup Greek yogurt",
      "1/3 cup rolled oats",
      "1 tbsp honey",
      "1 tbsp almond butter",
      "Ice cubes"
    ],
    categories: ["muscle-gain", "high-protein"],
    nutrition: {
      calories: 550,
      protein: 45,
      carbs: 60,
      fat: 15
    },
    dietaryInfo: {
      isGlutenFree: false,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey"]
  },
  {
    id: "banana-beast-gainer",
    name: "Banana Beast Gainer",
    description: "Calorie-dense banana smoothie designed to fuel intense workouts and support muscle growth.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "2 bananas",
      "2 scoops vanilla protein powder",
      "1 cup whole milk",
      "2 tbsp natural peanut butter",
      "1/4 cup rolled oats",
      "1 tbsp honey",
      "1/2 tsp cinnamon",
      "Ice cubes"
    ],
    categories: ["muscle-gain", "high-protein"],
    nutrition: {
      calories: 580,
      protein: 50,
      carbs: 65,
      fat: 18
    },
    dietaryInfo: {
      isGlutenFree: false,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey", "peanut"]
  },
  {
    id: "coconut-mango-muscle",
    name: "Coconut Mango Muscle Builder",
    description: "Tropical flavors with added calories from coconut cream to support muscle growth.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 cup mango chunks",
      "2 scoops vanilla protein powder",
      "1 cup coconut milk",
      "1/4 cup coconut cream",
      "1/2 banana",
      "1 tbsp honey",
      "Ice cubes"
    ],
    categories: ["muscle-gain", "tropical"],
    nutrition: {
      calories: 520,
      protein: 40,
      carbs: 55,
      fat: 20
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey"]
  },
  {
    id: "avocado-spinach-mass",
    name: "Avocado Spinach Mass Builder",
    description: "Nutrient-dense green smoothie with healthy fats from avocado to support muscle growth.",
    image: "/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png",
    ingredients: [
      "1 avocado",
      "2 cups spinach",
      "2 scoops vanilla protein powder",
      "1 cup whole milk",
      "1 banana",
      "1 tbsp honey",
      "Ice cubes"
    ],
    categories: ["muscle-gain", "green"],
    nutrition: {
      calories: 540,
      protein: 45,
      carbs: 50,
      fat: 22
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey"]
  },
  {
    id: "chocolate-banana-gainer",
    name: "Chocolate Banana Gainer",
    description: "Classic chocolate and banana combination optimized for calorie and protein content.",
    image: "/lovable-uploads/5f31cd0f-9fbc-4fca-8d50-01aad54a4a37.jpg",
    ingredients: [
      "2 bananas",
      "2 scoops chocolate protein powder",
      "1 cup whole milk",
      "2 tbsp chocolate hazelnut spread",
      "1 tbsp cocoa powder",
      "1/4 cup rolled oats",
      "Ice cubes"
    ],
    categories: ["muscle-gain", "high-protein"],
    nutrition: {
      calories: 590,
      protein: 45,
      carbs: 70,
      fat: 20
    },
    dietaryInfo: {
      isGlutenFree: false,
      isNutFree: false,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: true,
      isMealReplacement: true
    },
    proteinType: ["whey"]
  },
  {
    id: "pineapple-coconut-bulker",
    name: "Pineapple Coconut Muscle Bulker",
    description: "Tropical mass gainer with digestive enzymes from pineapple to aid protein absorption.",
    image: "/lovable-uploads/8fa95fdd-3aa3-4a65-8c77-b55c9e15f22c.jpg",
    ingredients: [
      "1 cup pineapple chunks",
      "2 scoops vanilla protein powder",
      "1 cup coconut milk",
      "1/2 cup Greek yogurt",
      "1 tbsp coconut oil",
      "1 tbsp honey",
      "Ice cubes"
    ],
    categories: ["muscle-gain", "tropical"],
    nutrition: {
      calories: 530,
      protein: 42,
      carbs: 50,
      fat: 22
    },
    dietaryInfo: {
      isGlutenFree: true,
      isNutFree: true,
      isSoyFree: true,
      isSugarFree: false,
      hasCaffeine: false,
      isMealReplacement: true
    },
    proteinType: ["whey"]
  }
];
