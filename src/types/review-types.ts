
export interface Review {
  id: string;
  recipe_id: string;
  user_id: string; // Changed from optional to required to match component usage
  rating?: number;
  comment?: string;
  created_at: string;
  updated_at?: string;
  user_email?: string; // For display purposes
  // Add this property to support the components that use it
  smoothie_id?: string;
}
