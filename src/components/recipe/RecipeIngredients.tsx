
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface RecipeIngredientsProps {
  ingredients: string[];
}

const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient) 
        : [...prev, ingredient]
    );
  };

  return (
    <div className="mt-8 px-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients:</h2>
      <Card className="p-4">
        <div className="border-b pb-3 mb-3">
          <Button 
            variant="ghost" 
            className="text-coral-600 hover:text-coral-700 p-0 h-auto"
            onClick={() => setSelectedIngredients(
              selectedIngredients.length === ingredients.length ? [] : [...ingredients]
            )}
          >
            {selectedIngredients.length === ingredients.length ? "Deselect All" : "Select All"}
          </Button>
        </div>
        <ul className="space-y-3">
          {ingredients.map((ingredient, idx) => (
            <li key={idx} className="flex items-start space-x-3 py-2 border-b border-gray-100">
              <Checkbox 
                id={`ingredient-${idx}`}
                checked={selectedIngredients.includes(ingredient)}
                onCheckedChange={() => toggleIngredient(ingredient)}
                className="mt-1 text-coral-500 border-coral-200"
              />
              <label 
                htmlFor={`ingredient-${idx}`}
                className="text-gray-700 cursor-pointer flex-1"
              >
                {ingredient}
              </label>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default RecipeIngredients;
