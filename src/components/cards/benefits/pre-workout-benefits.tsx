
import React from "react";
import { Zap, Dumbbell, Timer, Brain, Heart, Shield } from "lucide-react";
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
    title: "Optimal Timing",
    description: "Best consumed 30-60 minutes before your workout for peak performance benefits.",
    icon: <Timer className="h-5 w-5" />,
  },
  {
    title: "Mental Focus",
    description: "Ingredients that enhance concentration and mind-muscle connection during workouts.",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    title: "Cardiovascular Support",
    description: "Components that promote better blood flow and oxygen delivery to muscles.",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    title: "Immune Protection",
    description: "Antioxidants that help protect your body during high-intensity exercise.",
    icon: <Shield className="h-5 w-5" />,
  }
];
