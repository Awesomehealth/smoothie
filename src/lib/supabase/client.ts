// Re-export the client from the integrations directory
import { supabase as integrationsSupabase } from '@/integrations/supabase/client';
export const supabase = integrationsSupabase;
