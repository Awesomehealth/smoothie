
import { Database } from '../lib/supabase/database.types';

export type CategoriesType = {
  id: string;
  slug: string;
  name?: string;
  description?: string;
  image_url?: string;
  icon?: string;
  created_at: string;
  // Additional fields that match the database schema
  main_title: string;
  secondary_title?: string;
  main_description?: string;
  secondary_description?: string;
  category_banner_description?: string;
  category_banner_img?: string;
  preview_img?: string;
  meta_title?: string;
  meta_description?: string;
  keyword_group?: string;
  tags?: string[];
  tag_style?: string;
  recipes_count?: number;
}
