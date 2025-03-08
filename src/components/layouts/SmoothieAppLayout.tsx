
import React, { useState } from "react";
import Footer from "@/components/sections/Footer";
import { User, Gem, Menu, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface SmoothieAppLayoutProps {
  sidebar: React.ReactNode;
  mainContent: React.ReactNode;
}

const SmoothieAppLayout = ({ sidebar, mainContent }: SmoothieAppLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  
  // Check if we are on a category page (not the home page)
  const isCategoryPage = location.pathname !== "/";

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* App header */}
      <header className="w-full bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and menu section */}
          <div className="flex items-center gap-2">
            {isCategoryPage && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="mr-1" 
                onClick={toggleSidebar}
                aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {sidebarCollapsed ? (
                  <Menu className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                )}
              </Button>
            )}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-coral-500">Smoothie Search</span>
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Premium button */}
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center gap-2">
              <Gem className="h-4 w-4" />
              <span>Upgrade to Premium</span>
            </Button>
            
            {/* User profile */}
            <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 p-0">
              <div className="bg-gray-100 text-gray-700 h-full w-full rounded-full flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className={`sticky top-0 h-[calc(100vh-57px)] z-10 transition-all ${sidebarCollapsed && isCategoryPage ? 'w-16' : 'w-64'}`}>
          {React.cloneElement(sidebar as React.ReactElement, { isCollapsed: isCategoryPage ? sidebarCollapsed : false })}
        </aside>
        
        <main className="flex-1 flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            {mainContent}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SmoothieAppLayout;
