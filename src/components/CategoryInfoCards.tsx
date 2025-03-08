import React from "react";
import { Card } from "@/components/ui/card";
import { 
  HeartPulse, Clock, Dumbbell, 
  Weight, Flame, Carrot, 
  Droplet, Timer, Utensils,
  Scale, Zap, Leaf
} from "lucide-react";

interface CategoryInfoCardsProps {
  categoryId: string | undefined;
}

const CategoryInfoCards = ({ categoryId }: CategoryInfoCardsProps) => {
  // Define cards content based on category
  const getCardContent = () => {
    switch (categoryId) {
      case 'post-workout':
        return [
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
      
      case 'meal-replacement':
        return [
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
      
      case 'weight-loss':
        return [
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
      
      case 'muscle-gain':
        return [
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
      
      case 'high-protein':
        return [
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
      
      case 'low-carb':
        return [
          {
            title: "Carb Conscious",
            description: "Less than 15g of net carbs per serving to help manage blood sugar levels.",
            icon: <Carrot className="h-5 w-5" />,
          },
          {
            title: "Healthy Fats",
            description: "Rich in heart-healthy fats that provide sustained energy without the carb load.",
            icon: <Droplet className="h-5 w-5" />,
          },
          {
            title: "Blood Sugar Friendly",
            description: "Designed to minimize blood sugar spikes while keeping you energized.",
            icon: <HeartPulse className="h-5 w-5" />,
          }
        ];
      
      case 'keto':
        return [
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
      
      case 'pre-workout':
        return [
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
          }
        ];
      
      default:
        return [];
    }
  };

  const cardContent = getCardContent();

  if (cardContent.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {cardContent.map((card, index) => (
        <Card 
          key={index} 
          className="bg-gradient-to-br from-mint-50 to-mint-100 p-6 border border-mint-200 shadow-sm rounded-xl hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 rounded-full p-2 text-white">
              {card.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-800">{card.title}</h3>
          </div>
          <p className="text-gray-700">{card.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default CategoryInfoCards;
