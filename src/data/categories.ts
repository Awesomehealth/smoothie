
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
    image: 'https://images.unsplash.com/photo-1622480916113-9056466a36f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'HOT',
    tagStyle: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'meal-replacement',
    name: 'Meal Replacements Shakes',
    count: 14,
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'NEW',
    tagStyle: 'bg-coral-100 text-coral-800'
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss Shakes',
    count: 11,
    image: 'https://images.unsplash.com/photo-1638439430466-b65ff71aaf24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'YUMMY!',
    tagStyle: 'bg-lavender-100 text-lavender-800'
  },
  {
    id: 'muscle-gain',
    name: 'Muscle Gain Shakes',
    count: 4,
    image: 'https://images.unsplash.com/photo-1631508453173-f0d9780dcfc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'GOOD GOOD!',
    tagStyle: 'bg-sky-100 text-sky-800'
  },
  {
    id: 'high-protein',
    name: 'High Protein Shakes',
    count: 6,
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'OMG!',
    tagStyle: 'bg-lavender-100 text-lavender-800'
  },
  {
    id: 'low-carb',
    name: 'Low Carb Shakes',
    count: 6,
    image: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'DELICIOUS!',
    tagStyle: 'bg-sky-100 text-sky-800'
  },
  {
    id: 'keto',
    name: 'Keto Shakes',
    count: 4,
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'HEALTHY',
    tagStyle: 'bg-mint-100 text-mint-800'
  },
  {
    id: 'pre-workout',
    name: 'Pre Workout Shakes',
    count: 3,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'ENERGY!',
    tagStyle: 'bg-amber-100 text-amber-800'
  }
];
