
export interface Category {
  id: string;
  name: string;
  count: number;
  image: string;
  tag: string;
  tagStyle: string;
}

export const categories: Category[] = [
  {
    id: 'post-workout',
    name: 'Post Workout Shakes',
    count: 11,
    image: '/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png',
    tag: 'HOT',
    tagStyle: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'meal-replacement',
    name: 'Meal Replacements Shakes',
    count: 14,
    image: '/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png',
    tag: 'NEW',
    tagStyle: 'bg-coral-100 text-coral-800'
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss Shakes',
    count: 11,
    image: '/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png',
    tag: 'YUMMY!',
    tagStyle: 'bg-lavender-100 text-lavender-800'
  },
  {
    id: 'muscle-gain',
    name: 'Muscle Gain Shakes',
    count: 4,
    image: '/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png',
    tag: 'GOOD GOOD!',
    tagStyle: 'bg-sky-100 text-sky-800'
  },
  {
    id: 'high-protein',
    name: 'High Protein Shakes',
    count: 6,
    image: '/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png',
    tag: 'OMG!',
    tagStyle: 'bg-lavender-100 text-lavender-800'
  },
  {
    id: 'low-carb',
    name: 'Low Carb Shakes',
    count: 6,
    image: '/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png',
    tag: 'DELICIOUS!',
    tagStyle: 'bg-sky-100 text-sky-800'
  },
  {
    id: 'keto',
    name: 'Keto Shakes',
    count: 4,
    image: '/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png',
    tag: 'HEALTHY',
    tagStyle: 'bg-mint-100 text-mint-800'
  },
  {
    id: 'pre-workout',
    name: 'Pre Workout Shakes',
    count: 3,
    image: '/lovable-uploads/dcc8522c-06dd-4f6d-bdab-3bfbca8a9b0f.png',
    tag: 'ENERGY!',
    tagStyle: 'bg-amber-100 text-amber-800'
  }
];
