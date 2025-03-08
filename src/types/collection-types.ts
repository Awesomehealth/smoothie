
// Collection types for our application
export interface Collection {
  id: string;
  name: string;
  user_id?: string;
  created_at?: string;
}

export interface CollectionItem {
  id?: string;
  collection_id: string;
  smoothie_id: string;
  user_id?: string;
  created_at?: string;
}
