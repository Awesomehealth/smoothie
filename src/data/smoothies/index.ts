
import { Smoothie } from '../types';
import { postWorkoutSmoothies } from './post-workout';
import { mealReplacementSmoothies } from './meal-replacement';
import { highProteinSmoothies } from './high-protein';
import { muscleGainSmoothies } from './muscle-gain';
import { preWorkoutSmoothies } from './pre-workout';
import { weightLossSmoothies } from './weight-loss';
import { lowCarbSmoothies } from './low-carb';
import { ketoSmoothies } from './keto';
import { specialtySmoothies } from './specialty';

// Combine all the category-specific smoothies into one array
export const smoothies: Smoothie[] = [
  ...postWorkoutSmoothies,
  ...mealReplacementSmoothies,
  ...highProteinSmoothies,
  ...muscleGainSmoothies,
  ...preWorkoutSmoothies,
  ...weightLossSmoothies,
  ...lowCarbSmoothies,
  ...ketoSmoothies,
  ...specialtySmoothies
].filter((smoothie, index, self) => 
  // Remove duplicates based on id
  index === self.findIndex((s) => s.id === smoothie.id)
);
