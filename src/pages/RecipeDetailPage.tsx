
import { useParams, Link } from "react-router-dom";
import { smoothies } from "@/data/smoothiesData";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { motion } from "framer-motion";
import { Star, Heart, Printer, Mail, MessageSquare, ShoppingCart, Plus, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

const RecipeDetailPage = () => {
  const { smoothieId } = useParams<{ smoothieId: string }>();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  
  // Find the smoothie data based on the URL parameter
  const smoothie = smoothies.find((s) => s.id === smoothieId);
  
  if (!smoothie) {
    return (
      <SmoothieAppLayout
        mainContent={
          <div className="w-full max-w-3xl mx-auto p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
            <p className="mb-6">We couldn't find the recipe you're looking for.</p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        }
      />
    );
  }

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient) 
        : [...prev, ingredient]
    );
  };

  const handleAddToShoppingList = () => {
    const items = selectedIngredients.length > 0 
      ? selectedIngredients 
      : smoothie.ingredients;
      
    toast({
      title: "Added to Shopping List",
      description: `${items.length} ingredients added to your shopping list`,
    });
  };

  const handleSaveRecipe = () => {
    toast({
      title: "Recipe Saved",
      description: `${smoothie.name} has been saved to your favorites`,
    });
  };

  const handlePrintRecipe = () => {
    window.print();
  };

  const handleEmailRecipe = () => {
    toast({
      description: "Email feature coming soon!",
    });
  };

  const handleTextIngredients = () => {
    toast({
      description: "Text feature coming soon!",
    });
  };

  const handleViewShoppingList = () => {
    toast({
      description: "Shopping list feature coming soon!",
    });
  };

  return (
    <SmoothieAppLayout
      mainContent={
        <div className="w-full max-w-3xl mx-auto pb-20">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-lavender-50 to-mint-50 p-6 rounded-b-xl">
            <div className="text-center max-w-2xl mx-auto py-8">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {smoothie.name}
              </motion.h1>
              
              {/* Rating Stars */}
              <div className="flex justify-center items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`h-6 w-6 ${star <= (smoothie.recipe?.rating || 4.5) 
                      ? "text-coral-500 fill-coral-500" 
                      : "text-gray-300"}`}
                  />
                ))}
                <span className="ml-2 text-gray-600">
                  {smoothie.recipe?.reviews || 5} Reviews
                </span>
              </div>
              
              <p className="text-gray-600 italic mt-4">
                {smoothie.description}
              </p>
            </div>
          </div>
          
          {/* Recipe Info Cards */}
          <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded-xl -mt-5 shadow-sm border border-gray-100">
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Level:</span>
              <span className="font-semibold">{smoothie.recipe?.difficulty || "Easy"}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Total:</span>
              <span className="font-semibold">{smoothie.recipe?.totalTime || 10} min</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Yield:</span>
              <span className="font-semibold">{smoothie.recipe?.servings || 1} serving</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Active:</span>
              <span className="font-semibold">{smoothie.recipe?.prepTime || 5} min</span>
            </div>
          </div>
          
          {/* Nutrition Info */}
          <div className="mt-8 px-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Nutrition Facts</h2>
            <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-500">Calories</p>
                <p className="font-bold">{smoothie.nutrition.calories}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Protein</p>
                <p className="font-bold">{smoothie.nutrition.protein}g</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Carbs</p>
                <p className="font-bold">{smoothie.nutrition.carbs}g</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Fat</p>
                <p className="font-bold">{smoothie.nutrition.fat}g</p>
              </div>
            </div>
          </div>
          
          {/* Ingredients */}
          <div className="mt-8 px-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients:</h2>
            <Card className="p-4">
              <div className="border-b pb-3 mb-3">
                <Button 
                  variant="ghost" 
                  className="text-coral-600 hover:text-coral-700 p-0 h-auto"
                  onClick={() => setSelectedIngredients(
                    selectedIngredients.length === smoothie.ingredients.length ? [] : [...smoothie.ingredients]
                  )}
                >
                  {selectedIngredients.length === smoothie.ingredients.length ? "Deselect All" : "Select All"}
                </Button>
              </div>
              <ul className="space-y-3">
                {smoothie.ingredients.map((ingredient, idx) => (
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
            
            {/* Ingredient Action Buttons */}
            <div className="mt-6 space-y-3">
              <Button 
                className="w-full bg-gray-700 hover:bg-gray-800 text-white"
                onClick={() => toast({ description: "Ingredients feature coming soon!" })}
              >
                Get Ingredients
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-gray-300 flex items-center justify-center gap-2"
                onClick={handleAddToShoppingList}
              >
                <Plus size={18} /> Add to Shopping List
              </Button>
              
              <Button 
                variant="outline"
                className="w-full border-gray-300 flex items-center justify-center gap-2"
                onClick={handleViewShoppingList}
              >
                <ShoppingCart size={18} /> View Shopping List
              </Button>
              
              <Button 
                variant="outline"
                className="w-full border-gray-300 flex items-center justify-center gap-2"
                onClick={() => toast({ description: "Substitutions feature coming soon!" })}
              >
                <Edit size={18} /> Ingredient Substitutions
              </Button>
              
              <Button 
                variant="outline"
                className="w-full border-gray-300 flex items-center justify-center gap-2"
                onClick={handleTextIngredients}
              >
                <MessageSquare size={18} /> Text Ingredients
              </Button>
            </div>
          </div>
          
          {/* Instructions */}
          {smoothie.recipe?.instructions && smoothie.recipe.instructions.length > 0 && (
            <div className="mt-10 px-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Directions:</h2>
              <ol className="space-y-6 list-decimal list-inside">
                {smoothie.recipe.instructions.map((step, idx) => (
                  <li key={idx} className="text-gray-700">
                    <span className="font-semibold text-lg text-coral-600 mr-2">Step {idx + 1}</span>
                    <p className="mt-1 ml-7">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}
          
          {/* Recipe Tips */}
          {smoothie.recipe?.tips && smoothie.recipe.tips.length > 0 && (
            <div className="mt-8 px-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recipe Tips:</h2>
              <Card className="p-4 bg-mint-50">
                <ul className="space-y-3">
                  {smoothie.recipe.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-mint-600 font-semibold">•</span>
                      <p className="text-gray-700">{tip}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="mt-10 px-6">
            <Button 
              className="w-full bg-coral-500 hover:bg-coral-600 text-white h-12 rounded-full mb-4"
              onClick={handleSaveRecipe}
            >
              <Heart className="mr-2 h-5 w-5" /> Save Recipe
            </Button>
            
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="flex-1" onClick={handlePrintRecipe}>
                <Printer className="mr-2 h-4 w-4" /> Print
              </Button>
              <Button variant="outline" className="flex-1" onClick={handleEmailRecipe}>
                <Mail className="mr-2 h-4 w-4" /> Email
              </Button>
              <Button variant="outline" className="flex-1" onClick={handleTextIngredients}>
                <MessageSquare className="mr-2 h-4 w-4" /> Text
              </Button>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default RecipeDetailPage;
