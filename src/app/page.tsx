
'use client';

import CategorySidebar from "@/components/CategorySidebar";
import SearchSection from "@/components/sections/SearchSection";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import SidebarProvider, { useSidebar } from "@/contexts/SidebarContext";
import { Suspense, useEffect, useState } from "react";
import { Loader } from "lucide-react";

function Home() {
  const {
    showAdvancedSearch,
    setShowAdvancedSearch
  } = useSidebar();

  useEffect(() => {
    setShowAdvancedSearch(true);
  }, [setShowAdvancedSearch]);

  const [searchQuery, setSearchQuery] = useState("");
  const [displayLimit, setDisplayLimit] = useState(6);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setDisplayLimit(6);
  };

  const handleUrlSubmit = (url: string) => {
    console.log("URL submitted:", url);
  };


  const handleFilterSelect = (filterType: string, values: string[]) => {
    console.log("Filter selected:", filterType, values);
  };

  const handleDietaryToggle = (preference: string, isChecked: boolean) => {
    console.log("Dietary preference toggled:", preference, isChecked);
  };

  const handleLoadMore = () => {
    setDisplayLimit(prevLimit => prevLimit + 3);
  };

  const handleImageUpload = (file: File) => {
    console.log("Image uploaded:", file.name);
    // Image upload functionality will be implemented later
  };


  return (
    <div className="h-full flex items-center justify-center">
      <SearchSection
        onSearch={handleSearch}
        onImageUpload={handleImageUpload}
        onFilterSelect={handleFilterSelect}
        onDietaryToggle={handleDietaryToggle}
        showAdvancedSearch={showAdvancedSearch}
      />
    </div>
  )
}

export default function HomePage() {
  return (
    <SidebarProvider>
      <SmoothieAppLayout
        sidebar={<CategorySidebar />}
        mainContent={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
    </SidebarProvider>

  );
}
