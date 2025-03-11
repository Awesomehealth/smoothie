
'use client';

import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";
import Link from 'next/link';
import SidebarProvider from '@/contexts/SidebarContext';

export default function TermsConditionsPage() {
  return (
    <SidebarProvider>
      <SmoothieAppLayout
        sidebar={<CategorySidebar />}
        mainContent={
          <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

            <div className="prose prose-sm max-w-none">
              <p>
                Welcome to Awesome Kitchen! These Terms and Conditions govern your use of our website and services.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Awesome Kitchen website, you agree to be bound by these Terms and Conditions.
                If you do not agree to all the terms and conditions, then you may not access the website or use any services.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">2. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will always post the most current version on our website.
                By continuing to use the platform following the posting of updated Terms, you agree to be bound by the updated terms.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">3. Privacy Policy</h2>
              <p>
                Your use of Awesome Kitchen is also governed by our Privacy Policy, which can be found <Link href="/privacy-policy" className="text-awesome-green hover:underline">here</Link>.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@awesomekitchen.com.
              </p>

              <p className="mt-8 text-sm text-gray-500">
                Last updated: August 2023
              </p>
            </div>
          </div>
        }
      />
    </SidebarProvider>
  );
}
