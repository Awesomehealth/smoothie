
import { useRouter } from "next/router";
import Head from "next/head";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";

export default function TermsConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Awesome Kitchen</title>
        <meta 
          name="description" 
          content="Terms and Conditions for Awesome Kitchen - Please read before using our services" 
        />
        <meta property="og:title" content="Terms & Conditions | Awesome Kitchen" />
        <meta 
          property="og:description" 
          content="Terms and Conditions for Awesome Kitchen - Please read before using our services" 
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
            <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
            {/* Rest of terms and conditions content */}
          </div>
        }
      />
    </>
  );
}
