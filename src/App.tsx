
import React from 'react';
import { AuthProvider } from "./contexts/AuthContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import SidebarProvider from './contexts/SidebarContext';

const App = () => {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <SidebarProvider>
          <div className="app">
            {/* Your main application content here */}
          </div>
        </SidebarProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
};

export default App;
