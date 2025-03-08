
import React from "react";
import { Zap, Dumbbell, Brain } from "lucide-react";
import { BenefitCardData } from "@/types/benefit-types";

export const preWorkoutBenefits: BenefitCardData[] = [
  {
    title: "Energy Boost",
    description: "Natural caffeine and energizing ingredients to power your workout.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Performance Enhancer",
    description: "Nutrients that support increased endurance and strength during exercise.",
    icon: <Dumbbell className="h-5 w-5" />,
  },
  {
    title: "Mental Focus",
    description: "Ingredients that enhance concentration and mind-muscle connection during workouts.",
    icon: <Brain className="h-5 w-5" />,
  }
];
