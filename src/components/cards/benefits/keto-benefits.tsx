
import React from "react";
import { Flame, Droplet, Zap } from "lucide-react";
import { BenefitCardData } from "@/types/benefit-types";

export const ketoBenefits: BenefitCardData[] = [
  {
    title: "Keto-Friendly",
    description: "Follows the macronutrient ratio needed to maintain ketosis with less than 5g net carbs.",
    icon: <Flame className="h-5 w-5" />,
  },
  {
    title: "Fat-Fueled",
    description: "High in healthy fats that serve as your primary energy source while in ketosis.",
    icon: <Droplet className="h-5 w-5" />,
  },
  {
    title: "Mental Clarity",
    description: "Support the cognitive benefits of ketosis with brain-boosting ingredients.",
    icon: <Zap className="h-5 w-5" />,
  }
];
