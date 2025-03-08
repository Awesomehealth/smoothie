
import React from "react";
import { Utensils, Zap, Clock } from "lucide-react";
import { BenefitCardData } from "@/types/benefit-types";

export const mealReplacementBenefits: BenefitCardData[] = [
  {
    title: "Complete Nutrition",
    description: "Balanced macronutrients and micronutrients to replace a full meal.",
    icon: <Utensils className="h-5 w-5" />,
  },
  {
    title: "Sustained Energy",
    description: "Complex carbs provide lasting energy throughout the day without crashes.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Convenient Nutrition",
    description: "Quick and easy way to get complete nutrition when you're busy or on the go.",
    icon: <Clock className="h-5 w-5" />,
  }
];
