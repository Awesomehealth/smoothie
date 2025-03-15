
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/supabase/database.types';

// Use environment variables
const supabaseUrl = "https://lnbizzdnewstxummqvhm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuYml6emRuZXdzdHh1bW1xdmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzOTk2MDksImV4cCI6MjA1Njk3NTYwOX0._VUIjNbkm2a_1bFetZT4WCxmaB9iQ3l4psrucEuShsA";

// Create and export the client
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
