
import React from 'react';
import { ChevronRight, Search, User, FileText, BookOpen, Rocket, MessageCircle, HelpCircle, Dumbbell, Utensils, Weight, Flame, Apple, Carrot, HeartPulse, Timer } from "lucide-react";
import { categories } from "@/data/categories";

interface CategorySidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
}

const CategorySidebar = ({ selectedCategory, onCategorySelect }: CategorySidebarProps) => {
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

  return (
    <div className="h-full bg-gray-50 border-r border-gray-200 w-64 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-coral-500 font-bold text-xl">Smoothie Search</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {/* Categories Section */}
        <div className="p-3">
          <h3 className="text-sm text-gray-500 font-medium mb-2">Categories</h3>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => onCategorySelect(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gray-200 text-gray-800 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {getCategoryIcon(category.id)}
                  <span className="text-sm">{category.name}</span>
                  {selectedCategory === category.id && (
                    <ChevronRight className="ml-auto h-4 w-4 text-gray-500" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tools Section */}
        <div className="p-3">
          <h3 className="text-sm text-gray-500 font-medium mb-2">Tools</h3>
          <ul className="space-y-1">
            <li>
              <button className="w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 hover:bg-gray-100 text-gray-700">
                <Search className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Advanced Search</span>
              </button>
            </li>
            <li>
              <button className="w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 hover:bg-gray-100 text-gray-700">
                <FileText className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Recipe Creator</span>
              </button>
            </li>
            <li>
              <button className="w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 hover:bg-gray-100 text-gray-700">
                <BookOpen className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Nutrition Guide</span>
              </button>
            </li>
          </ul>
        </div>
        
        {/* Education Section */}
        <div className="p-3">
          <h3 className="text-sm text-gray-500 font-medium mb-2">Education</h3>
          <ul className="space-y-1">
            <li>
              <button className="w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 hover:bg-gray-100 text-gray-700">
                <Rocket className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Get Started</span>
              </button>
            </li>
            <li>
              <button className="w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 hover:bg-gray-100 text-gray-700">
                <HelpCircle className="h-4 w-4 text-gray-500" />
                <span className="text-sm">FAQ</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      {/* User Profile */}
      <div className="border-t border-gray-200 p-3">
        <button className="w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 hover:bg-gray-100">
          <div className="bg-coral-100 text-coral-500 h-8 w-8 rounded-full flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">Profile</p>
            <p className="text-xs text-gray-500">View your account</p>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default CategorySidebar;
