
import { useRouter } from "next/router";
import Head from "next/head";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Page Not Found | Awesome Kitchen</title>
        <meta name="description" content="The page you're looking for doesn't exist" />
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
          <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <Button onClick={() => router.push("/")} className="bg-awesome-green hover:bg-awesome-green/90">
              Return to Home
            </Button>
          </div>
        }
      />
    </>
  );
}
