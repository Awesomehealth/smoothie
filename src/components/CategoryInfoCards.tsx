
import React from "react";
import BenefitCard from "./cards/BenefitCard";
import { postWorkoutBenefits } from "./cards/benefits/post-workout-benefits";
import { mealReplacementBenefits } from "./cards/benefits/meal-replacement-benefits";
import { weightLossBenefits } from "./cards/benefits/weight-loss-benefits";
import { muscleGainBenefits } from "./cards/benefits/muscle-gain-benefits";
import { highProteinBenefits } from "./cards/benefits/high-protein-benefits";
import { lowCarbBenefits } from "./cards/benefits/low-carb-benefits";
import { ketoBenefits } from "./cards/benefits/keto-benefits";
import { preWorkoutBenefits } from "./cards/benefits/pre-workout-benefits";
import { BenefitCardData } from "@/types/benefit-types";

interface CategoryInfoCardsProps {
  categoryId: string | undefined;
}

const CategoryInfoCards = ({ categoryId }: CategoryInfoCardsProps) => {
  // Get benefits based on category
  const getBenefits = (): BenefitCardData[] => {
    switch (categoryId) {
      case 'post-workout':
        return postWorkoutBenefits;
      case 'meal-replacement':
        return mealReplacementBenefits;
      case 'weight-loss':
        return weightLossBenefits;
      case 'muscle-gain':
        return muscleGainBenefits;
      case 'high-protein':
        return highProteinBenefits;
      case 'low-carb':
        return lowCarbBenefits;
      case 'keto':
        return ketoBenefits;
      case 'pre-workout':
        return preWorkoutBenefits;
      default:
        return [];
    }
  };

  const benefits = getBenefits();

  if (benefits.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          title={benefit.title}
          description={benefit.description}
          icon={benefit.icon}
        />
      ))}
    </div>
  );
};

export default CategoryInfoCards;
