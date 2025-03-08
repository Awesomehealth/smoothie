
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  MessageCircle,
  Dumbbell, 
  Utensils, 
  Weight, 
  Flame, 
  Apple, 
  Carrot, 
  HeartPulse, 
  Timer 
} from "lucide-react";
import { categories } from "@/data/categories";
import { Switch } from "@/components/ui/switch";

interface CategorySidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
  showAdvancedSearch: boolean;
  onAdvancedSearchToggle: (show: boolean) => void;
  isCollapsed?: boolean;
}

const CategorySidebar = ({ 
  selectedCategory, 
  onCategorySelect, 
  showAdvancedSearch, 
  onAdvancedSearchToggle,
  isCollapsed 
}: CategorySidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // React to external collapse state if provided
  React.useEffect(() => {
    if (isCollapsed !== undefined) {
      setCollapsed(isCollapsed);
    }
  }, [isCollapsed]);

  // Map category IDs to corresponding icons
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'post-workout':
        return <HeartPulse className="h-4 w-4 text-coral-500" />;
      case 'meal-replacement':
        return <Utensils className="h-4 w-4 text-coral-500" />;
      case 'weight-loss':
        return <Weight className="h-4 w-4 text-coral-500" />;
      case 'muscle-gain':
        return <Dumbbell className="h-4 w-4 text-coral-500" />;
      case 'high-protein':
        return <Flame className="h-4 w-4 text-coral-500" />;
      case 'low-carb':
        return <Carrot className="h-4 w-4 text-coral-500" />;
      case 'keto':
        return <Apple className="h-4 w-4 text-coral-500" />;
      case 'pre-workout':
        return <Timer className="h-4 w-4 text-coral-500" />;
      default:
        return null;
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId);
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className={`h-full bg-gray-50 border-r border-gray-200 transition-all duration-300 flex flex-col relative ${collapsed ? 'w-16' : 'w-64'}`}>      
      <div className="flex-1 overflow-y-auto">
        {/* Categories Section */}
        <div className="p-3">
          <h3 className={`text-sm text-gray-500 font-medium mb-2 transition-opacity duration-300 ${collapsed ? 'opacity-0 h-0' : 'opacity-100'}`}>
            {!collapsed && "Categories"}
          </h3>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${
                    collapsed ? 'justify-center' : 'gap-2'
                  } ${
                    selectedCategory === category.id
                      ? 'bg-coral-100 text-coral-700 font-medium border-l-4 border-coral-500'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  title={collapsed ? category.name : undefined}
                >
                  {getCategoryIcon(category.id)}
                  {!collapsed && <span className="text-sm">{category.name}</span>}
                  {!collapsed && selectedCategory === category.id && (
                    <ChevronRight className="ml-auto h-4 w-4 text-gray-500" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tools Section */}
        <div className={`p-3 ${collapsed ? 'mt-4' : ''}`}>
          <h3 className={`text-sm text-gray-500 font-medium mb-2 transition-opacity duration-300 ${collapsed ? 'opacity-0 h-0' : 'opacity-100'}`}>
            {!collapsed && "Tools"}
          </h3>
          <ul className="space-y-1">
            <li>
              <div className={`w-full px-3 py-2 rounded-lg transition-colors flex items-center ${collapsed ? 'justify-center' : 'gap-2'} hover:bg-gray-100 text-gray-700`}>
                <Search className="h-4 w-4 text-gray-500" />
                {!collapsed && <span className="text-sm">Advanced Search</span>}
                {!collapsed && (
                  <div className="ml-auto">
                    <Switch 
                      checked={showAdvancedSearch} 
                      onCheckedChange={onAdvancedSearchToggle} 
                      className="data-[state=checked]:bg-coral-400"
                    />
                  </div>
                )}
              </div>
            </li>
            <li>
              <button className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${collapsed ? 'justify-center' : 'gap-2'} hover:bg-gray-100 text-gray-700`} title={collapsed ? "Recipe Creator" : undefined}>
                <FileText className="h-4 w-4 text-gray-500" />
                {!collapsed && <span className="text-sm">Recipe Creator</span>}
              </button>
            </li>
            <li>
              <button className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${collapsed ? 'justify-center' : 'gap-2'} hover:bg-gray-100 text-gray-700`} title={collapsed ? "Nutrition Guide" : undefined}>
                <BookOpen className="h-4 w-4 text-gray-500" />
                {!collapsed && <span className="text-sm">Nutrition Guide</span>}
              </button>
            </li>
          </ul>
        </div>
        
        {/* Education Section - replaced with Help and Contact */}
        <div className={`p-3 ${collapsed ? 'mt-4' : ''}`}>
          <h3 className={`text-sm text-gray-500 font-medium mb-2 transition-opacity duration-300 ${collapsed ? 'opacity-0 h-0' : 'opacity-100'}`}>
            {!collapsed && "Support"}
          </h3>
          <ul className="space-y-1">
            <li>
              <button className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${collapsed ? 'justify-center' : 'gap-2'} hover:bg-gray-100 text-gray-700`} title={collapsed ? "Help Center" : undefined}>
                <HelpCircle className="h-4 w-4 text-gray-500" />
                {!collapsed && <span className="text-sm">Help Center</span>}
              </button>
            </li>
            <li>
              <button className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${collapsed ? 'justify-center' : 'gap-2'} hover:bg-gray-100 text-gray-700`} title={collapsed ? "Contact Us" : undefined}>
                <MessageCircle className="h-4 w-4 text-gray-500" />
                {!collapsed && <span className="text-sm">Contact Us</span>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
