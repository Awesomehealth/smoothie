
export interface Review {
  id: string;
  recipe_id?: string;
  smoothie_id?: string; // For compatibility with existing code
  user_id?: string;
  rating?: number;
  comment?: string;
  created_at?: string;
  updated_at?: string;
  user_email?: string; // For display purposes
}
