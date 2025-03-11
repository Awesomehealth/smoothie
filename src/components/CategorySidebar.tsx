'use client'
import { useSidebar } from '@/contexts/SidebarContext';
import CategorySidebarComponent from './CategorySidebarComponent';

export default function CategorySidebar({ isCollapsed = false }) {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    showAdvancedSearch, 
    setShowAdvancedSearch 
  } = useSidebar();

  return (
    <CategorySidebarComponent
      selectedCategory={selectedCategory}
      onCategorySelect={setSelectedCategory}
      showAdvancedSearch={showAdvancedSearch}
      onAdvancedSearchToggle={setShowAdvancedSearch}
      isCollapsed={isCollapsed}
    />
  );
}