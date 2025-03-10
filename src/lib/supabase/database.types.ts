export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      authors: {
        Row: {
          avatar: string | null
          bio: string | null
          created_at: string | null
          id: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          avatar?: string | null
          bio?: string | null
          created_at?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          avatar?: string | null
          bio?: string | null
          created_at?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          category_banner_description: string | null
          category_banner_img: string | null
          created_at: string | null
          icon: string | null
          id: string
          keyword_group: string | null
          main_description: string | null
          main_title: string
          meta_description: string | null
          meta_title: string | null
          preview_img: string | null
          recipes_count: number | null
          secondary_description: string | null
          secondary_title: string | null
          slug: string
          tag_style: string | null
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          category_banner_description?: string | null
          category_banner_img?: string | null
          created_at?: string | null
          icon?: string | null
          id?: string
          keyword_group?: string | null
          main_description?: string | null
          main_title: string
          meta_description?: string | null
          meta_title?: string | null
          preview_img?: string | null
          recipes_count?: number | null
          secondary_description?: string | null
          secondary_title?: string | null
          slug: string
          tag_style?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          category_banner_description?: string | null
          category_banner_img?: string | null
          created_at?: string | null
          icon?: string | null
          id?: string
          keyword_group?: string | null
          main_description?: string | null
          main_title?: string
          meta_description?: string | null
          meta_title?: string | null
          preview_img?: string | null
          recipes_count?: number | null
          secondary_description?: string | null
          secondary_title?: string | null
          slug?: string
          tag_style?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      category_benefits: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          icon: string
          id: string
          title: string | null
          updated_at: string | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          icon: string
          id?: string
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string
          id?: string
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "category_benefits_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      ingredients: {
        Row: {
          created_at: string | null
          id: string
          img: string | null
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          img?: string | null
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          img?: string | null
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      labels: {
        Row: {
          created_at: string | null
          id: string
          slug: string
          text: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          slug: string
          text: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          slug?: string
          text?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      recipe_badges: {
        Row: {
          created_at: string | null
          id: string
          info: string
          recipe_id: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          info: string
          recipe_id?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          info?: string
          recipe_id?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_badges_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_categories: {
        Row: {
          category_id: string | null
          created_at: string | null
          id: string
          recipe_id: string | null
          updated_at: string | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          id?: string
          recipe_id?: string | null
          updated_at?: string | null
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          id?: string
          recipe_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_categories_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_ingredients: {
        Row: {
          created_at: string | null
          id: string
          info: string | null
          ingredient_id: string | null
          quantity: string | null
          recipe_id: string | null
          unit: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          info?: string | null
          ingredient_id?: string | null
          quantity?: string | null
          recipe_id?: string | null
          unit?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          info?: string | null
          ingredient_id?: string | null
          quantity?: string | null
          recipe_id?: string | null
          unit?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ingredients_ingredient_id_fkey"
            columns: ["ingredient_id"]
            isOneToOne: false
            referencedRelation: "ingredients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_ingredients_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_labels: {
        Row: {
          created_at: string | null
          id: string
          label_id: string | null
          recipe_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          label_id?: string | null
          recipe_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          label_id?: string | null
          recipe_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_labels_label_id_fkey"
            columns: ["label_id"]
            isOneToOne: false
            referencedRelation: "labels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_labels_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_media: {
        Row: {
          created_at: string | null
          id: string
          is_main: boolean | null
          recipe_id: string | null
          type: string | null
          updated_at: string | null
          url: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_main?: boolean | null
          recipe_id?: string | null
          type?: string | null
          updated_at?: string | null
          url: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_main?: boolean | null
          recipe_id?: string | null
          type?: string | null
          updated_at?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_media_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipes: {
        Row: {
          author_id: string | null
          benefits: string | null
          caffeine_free: boolean | null
          calories: number | null
          carbs: number | null
          cook_time: string | null
          created_at: string | null
          date: string | null
          diet_type: string | null
          directions: string[] | null
          fats: number | null
          gluten_free: boolean | null
          id: string
          meal_replacement: boolean | null
          nut_free: boolean | null
          original_youtube_link: string | null
          overview: string | null
          preparation_time: string | null
          protein: number | null
          protein_type: string | null
          recipe_cuisine: string | null
          recipe_yield: string | null
          slug: string
          soy_free: boolean | null
          sugar_free: boolean | null
          time_to_read: number | null
          title: string
          total_time: string | null
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          benefits?: string | null
          caffeine_free?: boolean | null
          calories?: number | null
          carbs?: number | null
          cook_time?: string | null
          created_at?: string | null
          date?: string | null
          diet_type?: string | null
          directions?: string[] | null
          fats?: number | null
          gluten_free?: boolean | null
          id?: string
          meal_replacement?: boolean | null
          nut_free?: boolean | null
          original_youtube_link?: string | null
          overview?: string | null
          preparation_time?: string | null
          protein?: number | null
          protein_type?: string | null
          recipe_cuisine?: string | null
          recipe_yield?: string | null
          slug: string
          soy_free?: boolean | null
          sugar_free?: boolean | null
          time_to_read?: number | null
          title: string
          total_time?: string | null
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          benefits?: string | null
          caffeine_free?: boolean | null
          calories?: number | null
          carbs?: number | null
          cook_time?: string | null
          created_at?: string | null
          date?: string | null
          diet_type?: string | null
          directions?: string[] | null
          fats?: number | null
          gluten_free?: boolean | null
          id?: string
          meal_replacement?: boolean | null
          nut_free?: boolean | null
          original_youtube_link?: string | null
          overview?: string | null
          preparation_time?: string | null
          protein?: number | null
          protein_type?: string | null
          recipe_cuisine?: string | null
          recipe_yield?: string | null
          slug?: string
          soy_free?: boolean | null
          sugar_free?: boolean | null
          time_to_read?: number | null
          title?: string
          total_time?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipes_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "authors"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string | null
          id: string
          rating: number | null
          recipe_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number | null
          recipe_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number | null
          recipe_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
