export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          image_url: string | null;
          name: string | null;
          slug: string;
          icon: string | null;
          main_title: string;
          secondary_title: string | null;
          main_description: string | null;
          secondary_description: string | null;
          category_banner_description: string | null;
          category_banner_img: string | null;
          preview_img: string | null;
          meta_title: string | null;
          meta_description: string | null;
          keyword_group: string | null;
          tags: string[] | null;
          tag_style: string | null;
          recipes_count: number | null;
        }
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          image_url?: string | null;
          name?: string | null;
          slug: string;
          icon?: string | null;
          main_title: string;
          secondary_title?: string | null;
          main_description?: string | null;
          secondary_description?: string | null;
          category_banner_description?: string | null;
          category_banner_img?: string | null;
          preview_img?: string | null;
          meta_title?: string | null;
          meta_description?: string | null;
          keyword_group?: string | null;
          tags?: string[] | null;
          tag_style?: string | null;
          recipes_count?: number | null;
        }
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          image_url?: string | null;
          name?: string | null;
          slug?: string;
          icon?: string | null;
          main_title?: string;
          secondary_title?: string | null;
          main_description?: string | null;
          secondary_description?: string | null;
          category_banner_description?: string | null;
          category_banner_img?: string | null;
          preview_img?: string | null;
          meta_title?: string | null;
          meta_description?: string | null;
          keyword_group?: string | null;
          tags?: string[] | null;
          tag_style?: string | null;
          recipes_count?: number | null;
        }
        Relationships: []
      }
      collection_items: {
        Row: {
          collection_id: string;
          created_at: string;
          id: string;
          recipe_id: string;
        }
        Insert: {
          collection_id: string;
          created_at?: string;
          id?: string;
          recipe_id: string;
        }
        Update: {
          collection_id?: string;
          created_at?: string;
          id?: string;
          recipe_id?: string;
        }
        Relationships: [
          {
            foreignKeyName: "collection_items_collection_id_fkey";
            columns: ["collection_id"];
            isOneToOne: false;
            referencedRelation: "collections";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "collection_items_recipe_id_fkey";
            columns: ["recipe_id"];
            isOneToOne: false;
            referencedRelation: "recipes";
            referencedColumns: ["id"];
          }
        ]
      }
      collections: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          user_id: string;
        }
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
          user_id: string;
        }
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          user_id?: string;
        }
        Relationships: [
          {
            foreignKeyName: "collections_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ]
      }
      ingredients: {
        Row: {
          created_at: string;
          id: string;
          name: string;
        }
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
        }
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
        }
        Relationships: []
      }
      recipe_ingredients: {
        Row: {
          amount: string | null;
          created_at: string;
          id: string;
          ingredient_id: string;
          recipe_id: string;
          unit: string | null;
        }
        Insert: {
          amount?: string | null;
          created_at?: string;
          id?: string;
          ingredient_id: string;
          recipe_id: string;
          unit?: string | null;
        }
        Update: {
          amount?: string | null;
          created_at?: string;
          id?: string;
          ingredient_id?: string;
          recipe_id?: string;
          unit?: string | null;
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ingredients_ingredient_id_fkey";
            columns: ["ingredient_id"];
            isOneToOne: false;
            referencedRelation: "ingredients";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "recipe_ingredients_recipe_id_fkey";
            columns: ["recipe_id"];
            isOneToOne: false;
            referencedRelation: "recipes";
            referencedColumns: ["id"];
          }
        ]
      }
      recipes: {
        Row: {
          calories: number | null;
          carbs: number | null;
          category_id: string | null;
          created_at: string;
          description: string | null;
          fat: number | null;
          id: string;
          image_url: string | null;
          instructions: string | null;
          name: string;
          protein: number | null;
          preparation_time: number | null;
          servings: number | null;
          tips: string | null;
          user_id: string | null;
        }
        Insert: {
          calories?: number | null;
          carbs?: number | null;
          category_id?: string | null;
          created_at?: string;
          description?: string | null;
          fat?: number | null;
          id?: string;
          image_url?: string | null;
          instructions?: string | null;
          name: string;
          protein?: number | null;
          preparation_time?: number | null;
          servings?: number | null;
          tips?: string | null;
          user_id?: string | null;
        }
        Update: {
          calories?: number | null;
          carbs?: number | null;
          category_id?: string | null;
          created_at?: string;
          description?: string | null;
          fat?: number | null;
          id?: string;
          image_url?: string | null;
          instructions?: string | null;
          name?: string;
          protein?: number | null;
          preparation_time?: number | null;
          servings?: number | null;
          tips?: string | null;
          user_id?: string | null;
        }
        Relationships: [
          {
            foreignKeyName: "recipes_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "recipes_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ]
      }
      reviews: {
        Row: {
          comment: string | null;
          created_at: string;
          id: string;
          rating: number | null;
          recipe_id: string;
          updated_at: string | null;
          user_id: string;
        }
        Insert: {
          comment?: string | null;
          created_at?: string;
          id?: string;
          rating?: number | null;
          recipe_id: string;
          updated_at?: string | null;
          user_id: string;
        }
        Update: {
          comment?: string | null;
          created_at?: string;
          id?: string;
          rating?: number | null;
          recipe_id?: string;
          updated_at?: string | null;
          user_id?: string;
        }
        Relationships: [
          {
            foreignKeyName: "reviews_recipe_id_fkey";
            columns: ["recipe_id"];
            isOneToOne: false;
            referencedRelation: "recipes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "reviews_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          email: string;
          id: string;
          name: string | null;
        }
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          email: string;
          id: string;
          name?: string | null;
        }
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          email?: string;
          id?: string;
          name?: string | null;
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
