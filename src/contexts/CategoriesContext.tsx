
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { CategoryType } from '@/types/db';
import { supabase } from '@/lib/supabase/client';

interface ICategoriesContext {
  categories: CategoryType[];
  loading: boolean;
  error?: string;
}

const CategoriesContext = createContext<ICategoriesContext | undefined>(undefined);

export function CategoriesProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('main_title');
      
      if (error) throw error;
      
      // Map the database fields to match our CategoryType
      const mappedCategories = data?.map(item => ({
        id: item.id,
        slug: item.slug,
        name: item.name, 
        description: item.description,
        image_url: item.image_url,
        icon: item.icon,
        created_at: item.created_at,
        main_title: item.main_title,
        secondary_title: item.secondary_title,
        main_description: item.main_description,
        secondary_description: item.secondary_description,
        category_banner_description: item.category_banner_description,
        category_banner_img: item.category_banner_img,
        preview_img: item.preview_img,
        meta_title: item.meta_title,
        meta_description: item.meta_description,
        keyword_group: item.keyword_group,
        tags: item.tags,
        tag_style: item.tag_style,
        recipes_count: item.recipes_count
      })) || [];
      
      setCategories(mappedCategories);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CategoriesContext.Provider value={{ categories, loading, error: error || undefined }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
}
