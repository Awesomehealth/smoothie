
'use client';

import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          {/* Rest of privacy policy content */}
        </div>
      }
    />
  );
}
