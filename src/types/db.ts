
import { Database } from '../lib/supabase/database.types';

export type CategoryType = Database["public"]["Tables"]["categories"]["Row"]
export type RecipeMediaType = Database["public"]["Tables"]["recipe_media"]["Row"]
export type RecipeReviewType = Database["public"]["Tables"]["reviews"]["Row"]
export type RecipeIngredientsType = Database["public"]["Tables"]["recipe_ingredients"]["Row"] & { ingredient: Database["public"]["Tables"]["ingredients"]["Row"] }
export type RecipeType = Database["public"]["Tables"]["recipes"]["Row"] & {
  ingredients: RecipeIngredientsType[];
  media: RecipeMediaType[];
  categories: CategoryType[];
  reviews: RecipeReviewType[]
}
