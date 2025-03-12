
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { CategoryType, RecipeType } from '@/types/db';
import { supabase } from '@/lib/supabase/client';
import { Smoothie } from '@/data/types';

interface ICategoriesContext {
  category: CategoryType;
  categoryRecipes: Smoothie[];
  loading: boolean;
  error?: string;
}

const CategoriesContext = createContext<ICategoriesContext | undefined>(undefined);

export function CategoryRecipesProvider({ children, categorySlug }: { children: React.ReactNode; categorySlug: string }) {
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [categoryRecipes, setCategoryRecipes] = useState<Smoothie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const prepareRecipe = (recipe: RecipeType): Smoothie => {
    return {
      id: recipe.id,
      slug: recipe.slug,
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
    const fetchCategoryRecipes = async (categorySlug: string) => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from('categories')
          .select('*, recipes(*, categories(*), ingredients:recipe_ingredients(*, ingredient:ingredients(*)))')
          .eq("slug", categorySlug)
          .single()

        if (error) throw error;

        setCategory(data);
        setCategoryRecipes(data.recipes.map(prepareRecipe));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryRecipes(categorySlug);
  }, [categorySlug]);

  return (
    <CategoriesContext.Provider value={{ category, categoryRecipes, loading, error: error || undefined }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategoryRecipes() {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoryRecipesProvider');
  }
  return context;
}
