import { Database } from '../lib/supabase/database.types';

export type CategoriesType = Database["public"]["Tables"]["categories"]["Row"]