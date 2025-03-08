
import React from "react";
import { Dumbbell, HeartPulse, Utensils } from "lucide-react";
import { BenefitCardData } from "@/types/benefit-types";

export const highProteinBenefits: BenefitCardData[] = [
  {
    title: "Protein-Packed",
    description: "20+ grams of high-quality protein per serving to support your fitness goals.",
    icon: <Dumbbell className="h-5 w-5" />,
  },
  {
    title: "Muscle Support",
    description: "Essential amino acids that help maintain and build lean muscle mass.",
    icon: <HeartPulse className="h-5 w-5" />,
  },
  {
    title: "Satiety Factor",
    description: "Keeps you feeling full longer, helping to reduce unnecessary snacking.",
    icon: <Utensils className="h-5 w-5" />,
  }
];
