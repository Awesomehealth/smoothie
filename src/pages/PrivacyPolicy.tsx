
import React from "react";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <SmoothieAppLayout
      sidebar={<div />}
      mainContent={
        <div className="w-full max-w-3xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="pl-0 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-600 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Introduction</h2>
            <p>
              Welcome to Awesome Body. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website
              and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">2. The Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you including:
              identity data, contact data, technical data, profile data, usage data, and marketing and communications data.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
              to provide you with the services you have requested, to improve our website and services,
              and to communicate with you.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data,
              including the right to request access, correction, erasure, restriction, transfer, object to processing,
              and data portability.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              privacy@awesomebody.com
            </p>
          </div>
        </div>
      }
    />
  );
};

export default PrivacyPolicy;
