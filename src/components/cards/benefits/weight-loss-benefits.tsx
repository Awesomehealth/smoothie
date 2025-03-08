
import React from "react";
import { Scale, Flame, Weight } from "lucide-react";
import { BenefitCardData } from "@/types/benefit-types";

export const weightLossBenefits: BenefitCardData[] = [
  {
    title: "Calorie Control",
    description: "Low-calorie but nutrient-dense options that keep you satisfied with fewer calories.",
    icon: <Scale className="h-5 w-5" />,
  },
  {
    title: "Metabolism Boost",
    description: "Ingredients that help enhance your metabolic rate to burn more calories throughout the day.",
    icon: <Flame className="h-5 w-5" />,
  },
  {
    title: "Appetite Control",
    description: "High fiber content helps control hunger and reduce overall calorie consumption.",
    icon: <Weight className="h-5 w-5" />,
  }
];
