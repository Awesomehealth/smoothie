
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/supabase/database.types';

// Use environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create and export the client
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
