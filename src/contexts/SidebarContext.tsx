'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  selectedCategory: string | null;
  setSelectedCategory: (categorySlug: string) => void;
  showAdvancedSearch: boolean;
  setShowAdvancedSearch: (show: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

interface SidebarProviderProps {
  children: ReactNode;
}

export default function SidebarProvider({ children }: SidebarProviderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const value = {
    selectedCategory,
    setSelectedCategory,
    showAdvancedSearch,
    setShowAdvancedSearch
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}