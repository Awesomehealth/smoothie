
import React from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-mint-50 to-mint-100 p-6 border border-mint-200 shadow-sm rounded-xl hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-green-600 rounded-full p-2 text-white">
          {icon}
        </div>
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </Card>
  );
};

export default BenefitCard;
