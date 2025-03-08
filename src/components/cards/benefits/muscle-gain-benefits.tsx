
import React from "react";
import { Dumbbell, Flame, Leaf } from "lucide-react";
import { BenefitCardData } from "@/types/benefit-types";

export const muscleGainBenefits: BenefitCardData[] = [
  {
    title: "High Protein Content",
    description: "Extra protein to support muscle synthesis and growth during bulking phases.",
    icon: <Dumbbell className="h-5 w-5" />,
  },
  {
    title: "Calorie Surplus",
    description: "Nutrient-dense calories to help you meet your daily surplus goals for muscle growth.",
    icon: <Flame className="h-5 w-5" />,
  },
  {
    title: "Essential Nutrients",
    description: "Vitamins and minerals that are crucial for recovery and muscle building processes.",
    icon: <Leaf className="h-5 w-5" />,
  }
];
