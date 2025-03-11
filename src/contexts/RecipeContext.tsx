
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { RecipeType } from '@/types/db';
import { supabase } from '@/lib/supabase/client';
import { Smoothie } from '@/data/types';

interface IRecipeContext {
  recipe: Smoothie;
  loading: boolean;
  error?: string;
}

const RecipeContext = createContext<IRecipeContext | undefined>(undefined);

export function RecipeProvider({ children, recipeId }: { children: React.ReactNode; recipeId: string }) {
  const [recipe, setRecipe] = useState<Smoothie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const prepareRecipe = (recipe: RecipeType): Smoothie => {
    return {
      id: recipe.id,
      name: recipe.title,
      description: recipe.overview,
      image: recipe.media?.filter(m => m.type === "image")?.map(m => m.url)?.[0],
      ingredients: recipe.ingredients?.map(ri => ri.ingredient?.name),
      categories: recipe.categories?.map(c => c.main_title),
      nutrition: {
        calories: recipe.calories,
        protein: recipe.protein,
        carbs: recipe.carbs,
        fat: recipe.fats,
      },
      dietaryInfo: {
        isGlutenFree: recipe.gluten_free,
        isNutFree: recipe.nut_free,
        isSoyFree: recipe.soy_free,
        isSugarFree: recipe.sugar_free,
        hasCaffeine: recipe.caffeine_free,
        isMealReplacement: recipe.meal_replacement,
      },
      proteinType: recipe.protein_type,
      recipe: {
        difficulty: recipe.difficulty,
        servings: recipe.servings,
        prepTime: recipe.preparation_time,
        totalTime: recipe.total_time,
        instructions: recipe.directions,
        // tips?: recipe.tips
        rating: (recipe.reviews?.reduce((a, b) => a + b.rating, 0)) / (recipe.reviews?.length || 1),
        reviews: recipe.reviews?.length
      }
    }
  }

  useEffect(() => {
    const fetchRecipe = async (recipeId: string) => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from('recipes')
          .select('*, categories(*), ingredients:recipe_ingredients(*, ingredient:ingredients(*))')
          .eq("id", recipeId)
          .single<RecipeType>()
          
        if (error) throw error;

        setRecipe(prepareRecipe(data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe(recipeId);
  }, [recipeId]);

  return (
    <RecipeContext.Provider value={{ recipe, loading, error: error || undefined }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipe() {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipe must be used within a RecipeProvider');
  }
  return context;
}
