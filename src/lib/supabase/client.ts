
// This file is being deprecated in favor of src/integrations/supabase/client.ts
// It's kept temporarily for backward compatibility

import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Use environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Re-export the client from the integrations directory
import { supabase as integrationsSupabase } from '@/integrations/supabase/client';
export const supabase = integrationsSupabase;
