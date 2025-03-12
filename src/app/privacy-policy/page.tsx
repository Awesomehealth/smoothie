
'use client';

import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <SmoothieAppLayout
      sidebar={<CategorySidebar />}
      mainContent={
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <div className="prose prose-sm max-w-none">
            <p>
              At Awesome Kitchen, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you register for an account, create or modify your profile, or interact with features on the site.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to process transactions, send you related information, and for other legitimate business purposes.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">3. Sharing Your Information</h2>
            <p>
              We may share the information we collect in various ways, including with vendors and service providers who need access to such information to carry out work on our behalf.
            </p>

            {/* Add more sections as needed */}

            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p>
              If you have any questions about our Privacy Policy, please contact us at privacy@awesomekitchen.com.
            </p>

            <p className="mt-8 text-sm text-gray-500">
              Last updated: August 2023
            </p>

            <div className="mt-6">
              <Link href="/terms-conditions" className="text-awesome-green hover:underline">View our Terms & Conditions</Link>
            </div>
          </div>
        </div>
      }
    />

  );
}
