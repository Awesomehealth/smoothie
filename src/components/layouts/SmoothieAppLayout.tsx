import React, { useState } from "react";
import Footer from "@/components/sections/Footer";
import { User, Gem, Menu, ChevronLeft, LogIn, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
interface SmoothieAppLayoutProps {
  sidebar: React.ReactNode;
  mainContent: React.ReactNode;
}
const SmoothieAppLayout = ({
  sidebar,
  mainContent
}: SmoothieAppLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  // Check if we are on a category page (not the home page)
  const isCategoryPage = location.pathname !== "/";
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  return <div className="min-h-screen flex flex-col bg-white relative">
      {/* App header */}
      <header className="w-full bg-white border-b border-gray-200 py-3">
        <div className="flex items-center justify-between px-4 w-full">
          {/* Logo area - left aligned */}
          <div className="flex items-center ml-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-slate-950">Awesome Body</span>
            </Link>
          </div>

          {/* Sidebar toggle - only shown on category pages */}
          {isCategoryPage && <div className="absolute left-16 top-1/2 transform -translate-y-1/2">
              <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}>
                {sidebarCollapsed ? <Menu className="h-5 w-5 text-awesome-green" /> : <ChevronLeft className="h-5 w-5 text-awesome-green" />}
              </Button>
            </div>}

          {/* Right side actions - right aligned */}
          <div className="flex items-center space-x-4">
            {/* Premium button */}
            <Button className="text-gray-800 font-medium rounded-full flex items-center gap-2 bg-mint-500 hover:bg-mint-400">
              <Gem className="h-4 w-4" />
              <span>Upgrade to Premium</span>
            </Button>
            
            {/* User profile with dropdown */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 p-0">
                        <div className="bg-gray-100 text-gray-700 h-full w-full rounded-full flex items-center justify-center">
                          <User className="h-5 w-5" />
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 bg-white shadow-md">
                      <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer">
                        <LogIn className="h-4 w-4" />
                        <span>Log in / Sign up</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer">
                        <HelpCircle className="h-4 w-4" />
                        <span>Help Center</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer">
                        <MessageCircle className="h-4 w-4" />
                        <span>Contact Us</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>

      <div className="flex flex-1 relative">
        <aside className={`sticky top-0 h-[calc(100vh-57px)] z-10 transition-all ${sidebarCollapsed && isCategoryPage ? 'w-16' : 'w-64'}`}>
          {React.cloneElement(sidebar as React.ReactElement, {
          isCollapsed: isCategoryPage ? sidebarCollapsed : false
        })}
        </aside>
        
        <main className="flex-1 flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            {mainContent}
          </div>
        </main>
      </div>
      <Footer />
    </div>;
};
export default SmoothieAppLayout;