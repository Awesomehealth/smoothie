
'use client'
import { useSidebar } from '@/contexts/SidebarContext';
import CategorySidebarComponent from './CategorySidebarComponent';
import { useCategories } from '@/contexts/CategoriesContext';

interface CategorySidebarProps {
  isCollapsed?: boolean;
}

export default function CategorySidebar({ isCollapsed = false }: CategorySidebarProps) {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    showAdvancedSearch, 
    setShowAdvancedSearch 
  } = useSidebar();
  
  const { sidebarCategories } = useCategories();

  return (
    <CategorySidebarComponent
      selectedCategory={selectedCategory}
      onCategorySelect={setSelectedCategory}
      showAdvancedSearch={showAdvancedSearch}
      onAdvancedSearchToggle={setShowAdvancedSearch}
      isCollapsed={isCollapsed}
      categories={sidebarCategories}
    />
  );
}
