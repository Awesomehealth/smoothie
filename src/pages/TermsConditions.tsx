
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
        </div>
      }
    />
  );
};

export default TermsConditions;
