
import React from 'react';
import { categories } from "@/data/categories";

interface CategorySidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
}

const CategorySidebar = ({ selectedCategory, onCategorySelect }: CategorySidebarProps) => {
  return (
    <div className="h-full bg-white border-r border-gray-100 p-4 w-64">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onCategorySelect(category.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-coral-100 text-coral-800 font-medium'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div 
                className="w-6 h-6 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <span>{category.name}</span>
              <span className="ml-auto text-xs text-gray-500">{category.count}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
