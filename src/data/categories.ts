
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
    name: 'Post Workout',
    count: 11,
    image: 'https://images.unsplash.com/photo-1622480916113-9056466a36f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'HOT',
    tagStyle: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'meal-replacement',
    name: 'Meal Replacements',
    count: 14,
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'NEW',
    tagStyle: 'bg-coral-100 text-coral-800'
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss',
    count: 11,
    image: 'https://images.unsplash.com/photo-1638439430466-b65ff71aaf24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'YUMMY!',
    tagStyle: 'bg-lavender-100 text-lavender-800'
  },
  {
    id: 'muscle-gain',
    name: 'Muscle Gain',
    count: 4,
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'GOOD GOOD!',
    tagStyle: 'bg-sky-100 text-sky-800'
  },
  {
    id: 'high-protein',
    name: 'High Protein',
    count: 6,
    image: 'https://images.unsplash.com/photo-1560421741-6551a3633f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'OMG!',
    tagStyle: 'bg-lavender-100 text-lavender-800'
  },
  {
    id: 'low-carb',
    name: 'Low Carb',
    count: 6,
    image: 'https://images.unsplash.com/photo-1571024462404-e8c954a3fb88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'DELICIOUS!',
    tagStyle: 'bg-sky-100 text-sky-800'
  },
  {
    id: 'keto',
    name: 'Keto',
    count: 4,
    image: 'https://images.unsplash.com/photo-1571907483083-af70aeda3086?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'HEALTHY',
    tagStyle: 'bg-mint-100 text-mint-800'
  },
  {
    id: 'pre-workout',
    name: 'Pre Workout',
    count: 3,
    image: 'https://images.unsplash.com/photo-1578608712688-86be57a5d198?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'ENERGY!',
    tagStyle: 'bg-amber-100 text-amber-800'
  }
];
