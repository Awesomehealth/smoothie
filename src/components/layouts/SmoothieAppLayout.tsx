
import React, { useState } from "react";
import Footer from "@/components/sections/Footer";
import { User, Gem, Menu, ChevronLeft, LogIn, HelpCircle, MessageCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import LoginDialog from "@/components/auth/LoginDialog";
import { useAuth } from "@/contexts/AuthContext";

interface SmoothieAppLayoutProps {
  sidebar: React.ReactNode;
  mainContent: React.ReactNode;
}

const SmoothieAppLayout = ({
  sidebar,
  mainContent
}: SmoothieAppLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isCategoryPage = location.pathname !== "/";

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleLoginClick = () => {
    setLoginDialogOpen(true);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  // Calculate content height class based on the current route
  // For home page, we want a fixed height without scrolling
  const contentHeightClass = location.pathname === "/" 
    ? "h-[calc(100vh-57px-72px)]" 
    : "min-h-[calc(100vh-57px-72px)]";

  return (
    <>
      <div className="flex flex-col bg-white relative h-[calc(100vh-72px)] overflow-hidden">
        <header className="w-full bg-white border-b border-gray-200 py-3">
          <div className="flex items-center justify-between px-4 w-full">
            {isCategoryPage && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleSidebar} 
                className="mr-2"
                aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                <Menu className="h-5 w-5 text-awesome-green" />
              </Button>
            )}
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-slate-950">Awesome Body</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button className="text-gray-800 font-medium rounded-full flex items-center gap-2 bg-mint-500 hover:bg-mint-400">
                <Gem className="h-4 w-4" />
                <span>Upgrade to Premium</span>
              </Button>
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
                        {user ? (
                          <>
                            <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-default">
                              <User className="h-4 w-4" />
                              <span>{user.email}</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer" onClick={handleSignOut}>
                              <LogOut className="h-4 w-4" />
                              <span>Sign out</span>
                            </DropdownMenuItem>
                          </>
                        ) : (
                          <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer" onClick={handleLoginClick}>
                            <LogIn className="h-4 w-4" />
                            <span>Log in / Sign up</span>
                          </DropdownMenuItem>
                        )}
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

        <div className={`flex flex-1 ${contentHeightClass} overflow-hidden`}>
          <aside className={`sticky top-0 h-full z-10 transition-all ${sidebarCollapsed && isCategoryPage ? 'w-16' : 'w-64'}`}>
            {React.cloneElement(sidebar as React.ReactElement, {
              isCollapsed: isCategoryPage ? sidebarCollapsed : false
            })}
          </aside>
          
          <main className="flex-1 overflow-auto">
            {mainContent}
          </main>
        </div>
        
        <LoginDialog isOpen={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} />
      </div>
      
      {/* Footer completely separated from the navigation */}
      <div className="max-w-[1280px] mx-auto px-4">
        <Footer />
      </div>
    </>
  );
};

export default SmoothieAppLayout;
