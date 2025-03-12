
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
      
      setCategories(data);
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
