
import React from "react";
import { Carrot, Droplet, HeartPulse } from "lucide-react";
import { BenefitCardData } from "@/types/benefit-types";

export const lowCarbBenefits: BenefitCardData[] = [
  {
    title: "Carb Conscious",
    description: "Less than 15g of net carbs per serving to help manage blood sugar levels.",
    icon: <Carrot className="h-5 w-5" />,
  },
  {
    title: "Healthy Fats",
    description: "Rich in heart-healthy fats that provide sustained energy without the carb load.",
    icon: <Droplet className="h-5 w-5" />,
  },
  {
    title: "Blood Sugar Friendly",
    description: "Designed to minimize blood sugar spikes while keeping you energized.",
    icon: <HeartPulse className="h-5 w-5" />,
  }
];
