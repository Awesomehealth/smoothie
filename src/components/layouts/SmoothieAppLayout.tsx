
import React from "react";
import Footer from "@/components/sections/Footer";

interface SmoothieAppLayoutProps {
  sidebar: React.ReactNode;
  mainContent: React.ReactNode;
}

const SmoothieAppLayout = ({ sidebar, mainContent }: SmoothieAppLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex flex-1">
        <aside className="sticky top-0 h-screen">
          {sidebar}
        </aside>
        
        <main className="flex-1 flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            {mainContent}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default SmoothieAppLayout;
