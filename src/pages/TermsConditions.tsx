
import React from "react";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsConditions = () => {
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
          
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-600 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using Awesome Body, you agree to be bound by these Terms and Conditions
              and all applicable laws and regulations. If you do not agree with any of these terms, you are
              prohibited from using or accessing this site.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Awesome Body's website
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose;</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
              <li>Remove any copyright or other proprietary notations from the materials;</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">3. Disclaimer</h2>
            <p>
              The materials on Awesome Body's website are provided on an 'as is' basis. Awesome Body makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a particular
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">4. Limitations</h2>
            <p>
              In no event shall Awesome Body or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on Awesome Body's website, even if Awesome Body or an authorized representative
              has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and any
              dispute relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
              terms@awesomebody.com
            </p>
          </div>
        </div>
      }
    />
  );
};

export default TermsConditions;
