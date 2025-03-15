
import React from 'react';
import { AuthProvider } from "./contexts/AuthContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import SidebarProvider from './contexts/SidebarContext';
import { useRouter } from "next/navigation";
import SmoothieAppLayout from './components/layouts/SmoothieAppLayout';
import CategorySidebar from './components/CategorySidebar';
import SearchSection from './components/sections/SearchSection';

const App = () => {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <SidebarProvider>
          <SmoothieAppLayout
            sidebar={<CategorySidebar />}
            mainContent={
              <div className="h-full flex items-center justify-center">
                <SearchSection
                  onSearch={() => {}}
                  onImageUpload={() => {}}
                  onFilterSelect={() => {}}
                  onDietaryToggle={() => {}}
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
