
import { useRouter } from "next/router";
import Head from "next/head";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Awesome Kitchen</title>
        <meta 
          name="description" 
          content="Privacy Policy for Awesome Kitchen - Learn how we protect your data" 
        />
        <meta property="og:title" content="Privacy Policy | Awesome Kitchen" />
        <meta 
          property="og:description" 
          content="Privacy Policy for Awesome Kitchen - Learn how we protect your data" 
        />
      </Head>
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
    </>
  );
}
