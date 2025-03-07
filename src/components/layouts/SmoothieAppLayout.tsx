
import React, { useState } from "react";
import Footer from "@/components/sections/Footer";
import { ChevronLeft } from "lucide-react";

interface SmoothieAppLayoutProps {
  sidebar: React.ReactNode;
  mainContent: React.ReactNode;
}

const SmoothieAppLayout = ({ sidebar, mainContent }: SmoothieAppLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <div className="flex flex-1">
        <aside className={`sticky top-0 h-screen z-10 ${sidebarCollapsed ? 'hidden' : 'block'}`}>
          {sidebar}
        </aside>
        
        {/* Toggle button - styled to match the screenshot */}
        <div className="sticky top-4 z-20 ml-4">
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
            aria-label={sidebarCollapsed ? "Show sidebar" : "Hide sidebar"}
          >
            <ChevronLeft className={`h-4 w-4 text-gray-500 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
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
