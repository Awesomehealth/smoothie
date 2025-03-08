
import React from "react";
import { Clock, Dumbbell, HeartPulse } from "lucide-react";
import { BenefitCardData } from "@/types/benefit-types";

export const postWorkoutBenefits: BenefitCardData[] = [
  {
    title: "30-Minute Window",
    description: "Consume within 30 minutes after your workout to optimize recovery and nutrient absorption.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Protein Rich",
    description: "High-quality protein helps repair muscle tissue and supports growth after intense exercise.",
    icon: <Dumbbell className="h-5 w-5" />,
  },
  {
    title: "Recovery Boost",
    description: "These smoothies contain ingredients that reduce inflammation and speed up recovery time.",
    icon: <HeartPulse className="h-5 w-5" />,
  }
];
