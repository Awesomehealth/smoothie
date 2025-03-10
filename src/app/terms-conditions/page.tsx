
'use client';

import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";

export default function TermsConditions() {
  return (
    <SmoothieAppLayout
      sidebar={
        <CategorySidebar
          selectedCategory={null}
          onCategorySelect={() => {}}
          showAdvancedSearch={false}
          onAdvancedSearchToggle={() => {}}
        />
      }
      mainContent={
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
          {/* Rest of terms and conditions content */}
        </div>
      }
    />
  );
}
