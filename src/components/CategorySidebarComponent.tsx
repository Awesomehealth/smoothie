
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  ChevronRight,
  Search,
  FileText,
  BookOpen,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useCategories } from '@/contexts/CategoriesContext';
import { SidebarMenuSkeleton } from './ui/sidebar';
import { DynamicIcon } from './ui/dynamic-icon';

interface CategorySidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (categorySlug: string) => void;
  showAdvancedSearch: boolean;
  onAdvancedSearchToggle: (show: boolean) => void;
  isCollapsed?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: any[]; // Add the categories prop to resolve the type error
}

const CategorySidebarComponent = ({
  selectedCategory,
  onCategorySelect,
  showAdvancedSearch,
  onAdvancedSearchToggle,
  isCollapsed = false,
  categories
}: CategorySidebarProps) => {
  const { loading: isCategoriesLoading, error: categoriesFetchError } = useCategories();
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const router = useRouter();

  // Update internal state when external prop changes
  useEffect(() => {
    setCollapsed(isCollapsed);
  }, [isCollapsed]);

  const handleCategoryClick = (categorySlug: string) => {
    onCategorySelect(categorySlug);
    router.push(`/category/${categorySlug}`);
  };

  return (
    <div className={`h-full bg-gray-50 border-r border-gray-200 transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex-1 overflow-y-auto">
        {/* Categories Section */}
        <div className="p-3">
          {!collapsed && (
            <h3 className="text-sm text-gray-500 font-medium mb-2 text-left">
              Categories
            </h3>
          )}
          <ul className="space-y-1">
            {
              categoriesFetchError && (
                <p className='text-red-500 px-3 py-2 text-sm text-left'>
                  {categoriesFetchError}
                </p>
              )
            }
            {
              isCategoriesLoading && (
                <>
                  <SidebarMenuSkeleton />
                  <SidebarMenuSkeleton />
                  <SidebarMenuSkeleton />
                  <SidebarMenuSkeleton />
                  <SidebarMenuSkeleton />
                </>
              )
            }
            {categories.length ? categories.slice(0, 8).map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${collapsed ? 'justify-center' : 'gap-2'
                    } ${selectedCategory === category.slug
                      ? 'bg-green-100 text-green-700 font-medium border-l-4 border-green-500'
                      : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  title={collapsed ? category.main_title : undefined}
                >
                  {
                    category.icon && (
                      <DynamicIcon iconName={category.icon} className="h-4 w-4 text-green-600" />
                    )
                  }
                  {!collapsed && <span className="text-sm">{category.main_title}</span>}
                  {!collapsed && selectedCategory === category.slug && (
                    <ChevronRight className="ml-auto h-4 w-4 text-green-600" />
                  )}
                </button>
              </li>
            )) :
              !isCategoriesLoading && (
                <>
                  <p className='text-gray-400 px-3 py-2 text-sm text-left'>
                    No categories
                  </p>
                </>
              )
            }
          </ul>
        </div>

        {/* Tools Section */}
        <div className={`p-3 ${collapsed ? 'mt-4' : ''}`}>
          {!collapsed && (
            <h3 className="text-sm text-gray-500 font-medium mb-2 text-left">
              Tools
            </h3>
          )}
          <ul className="space-y-1">
            <li>
              <div className={`w-full px-3 py-2 rounded-lg transition-colors flex items-center ${collapsed ? 'justify-center' : 'gap-2'} hover:bg-gray-100 text-gray-700`}>
                <Search className="h-4 w-4 text-green-600" />
                {!collapsed && <span className="text-sm">Advanced Search</span>}
                {!collapsed && (
                  <div className="ml-auto">
                    <Switch
                      checked={showAdvancedSearch}
                      onCheckedChange={onAdvancedSearchToggle}
                    />
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebarComponent;
