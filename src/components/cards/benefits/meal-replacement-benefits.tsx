
import React from "react";
import { Utensils, Zap, Clock, BarChart, Scale, Leaf } from "lucide-react";
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
  },
  {
    title: "Portion Control",
    description: "Pre-measured servings help manage calorie intake for weight management goals.",
    icon: <Scale className="h-5 w-5" />,
  },
  {
    title: "Nutrient Density",
    description: "More essential vitamins and minerals per calorie than many typical meals.",
    icon: <BarChart className="h-5 w-5" />,
  },
  {
    title: "Plant-Based Options",
    description: "Many varieties offer sustainable, environmentally-friendly protein sources.",
    icon: <Leaf className="h-5 w-5" />,
  }
];
