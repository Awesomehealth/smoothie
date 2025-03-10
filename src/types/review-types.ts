
export interface Review {
  id: string;
  recipe_id: string;
  user_id: string;
  rating?: number;
  comment?: string;
  created_at: string;
  updated_at?: string;
  user_email?: string;
  smoothie_id?: string; // For backward compatibility
}
