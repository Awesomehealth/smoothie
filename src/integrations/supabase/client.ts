
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lnbizzdnewstxummqvhm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuYml6emRuZXdzdHh1bW1xdmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzOTk2MDksImV4cCI6MjA1Njk3NTYwOX0._VUIjNbkm2a_1bFetZT4WCxmaB9iQ3l4psrucEuShsA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

// Create a more flexible supabase client that allows working with tables not yet in the type system
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});
