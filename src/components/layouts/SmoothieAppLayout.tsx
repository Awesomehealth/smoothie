
import React, { useState } from "react";
import Footer from "@/components/sections/Footer";

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
