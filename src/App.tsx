
import React from 'react';
import { AuthProvider } from "./contexts/AuthContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import SidebarProvider from './contexts/SidebarContext';
import SmoothieAppLayout from './components/layouts/SmoothieAppLayout';
import CategorySidebar from './components/CategorySidebar';
import SearchSection from './components/sections/SearchSection';

const App = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleImageUpload = (file: File) => {
    console.log("Image uploaded:", file.name);
  };

  const handleFilterSelect = (filterType: string, values: string[]) => {
    console.log("Filter selected:", filterType, values);
  };

  const handleDietaryToggle = (preference: string, isChecked: boolean) => {
    console.log("Dietary preference toggled:", preference, isChecked);
  };

  return (
    <AuthProvider>
      <CategoriesProvider>
        <SidebarProvider>
          <SmoothieAppLayout
            sidebar={<CategorySidebar />}
            mainContent={
              <div className="h-full flex items-center justify-center">
                <SearchSection
                  onSearch={handleSearch}
                  onImageUpload={handleImageUpload}
                  onFilterSelect={handleFilterSelect}
                  onDietaryToggle={handleDietaryToggle}
                  showAdvancedSearch={true}
                />
              </div>
            }
          />
        </SidebarProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
};

export default App;
