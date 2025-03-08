
import React, { useState } from "react";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsConditions = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  return (
    <SmoothieAppLayout
      sidebar={
        <CategorySidebar
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          showAdvancedSearch={showAdvancedSearch}
          onAdvancedSearchToggle={setShowAdvancedSearch}
        />
      }
      mainContent={
        <div className="w-full max-w-5xl mx-auto px-4 py-8">
          <div className="mb-6 pl-2">
            <Link to="/">
              <Button variant="ghost" className="pl-0 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Terms & Conditions</h1>
            <p className="text-gray-600 mt-2">Last updated: December 26, 2024</p>
          </div>

          <div className="prose prose-slate max-w-none">
            {/* Terms and conditions content will go here */}
            <p>
              This page contains the terms and conditions for using Awesome Health Club services and products.
              Full content to be added.
            </p>
          </div>
        </div>
      }
    />
  );
};

export default TermsConditions;
