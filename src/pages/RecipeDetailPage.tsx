
import { useParams, Link } from "react-router-dom";
import { smoothies } from "@/data/smoothiesData";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { motion } from "framer-motion";
import { Star, Heart, Printer, Mail, MessageSquare, ShoppingCart, Plus, Edit, Share, Save, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import CategorySidebar from "@/components/CategorySidebar";
import { useAuth } from "@/contexts/AuthContext";
import LoginDialog from "@/components/auth/LoginDialog";
import CollectionDialog from "@/components/collections/CollectionDialog";

const RecipeDetailPage = () => {
  const { smoothieId } = useParams<{ smoothieId: string }>();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [collectionDialogOpen, setCollectionDialogOpen] = useState(false);
  const { user } = useAuth();
  
  const smoothie = smoothies.find((s) => s.id === smoothieId);
  
  if (!smoothie) {
    return (
      <SmoothieAppLayout
        sidebar={
          <CategorySidebar
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            showAdvancedSearch={showAdvancedSearch}
            onAdvancedSearchToggle={setShowAdvancedSearch}
          />
        }
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
    if (!user) {
      setLoginDialogOpen(true);
      return;
    }
    
    setCollectionDialogOpen(true);
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

  const handleShareRecipe = () => {
    toast({
      title: "Share Recipe",
      description: "Recipe link copied to clipboard!",
    });
  };

  const dummyImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <SmoothieAppLayout
      sidebar={
        <CategorySidebar
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          showAdvancedSearch={showAdvancedSearch}
          onAdvancedSearchToggle={setShowAdvancedSearch}
        />
      }
      mainContent={
        <div className="w-full max-w-5xl mx-auto pb-20">
          <div className="flex justify-between items-center py-6 px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{smoothie.name}</h1>
            <div className="flex gap-4">
              <Button variant="outline" onClick={handleShareRecipe}>
                <Share size={20} className="mr-2" /> Share
              </Button>
              <Button variant="outline" onClick={handleSaveRecipe}>
                <Save size={20} className="mr-2" /> Save
              </Button>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">
              <div className="md:col-span-2 md:row-span-2 relative">
                <video 
                  className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
                  style={{ minHeight: "400px" }}
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src="https://player.vimeo.com/external/414566109.sd.mp4?s=c912f93f5ce54b6fe68d5bcdf3d20a3255dbba6c&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src={dummyImages[0]} 
                  alt={`${smoothie.name} detail 1`} 
                  className="w-full h-full object-cover rounded-tr-lg"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="hidden md:block">
                <img 
                  src={dummyImages[1]} 
                  alt={`${smoothie.name} detail 2`} 
                  className="w-full h-full object-cover"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="hidden md:block">
                <img 
                  src={dummyImages[2]} 
                  alt={`${smoothie.name} detail 3`} 
                  className="w-full h-full object-cover"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="hidden md:block relative">
                <img 
                  src={dummyImages[3]} 
                  alt={`${smoothie.name} detail 4`} 
                  className="w-full h-full object-cover rounded-br-lg"
                  style={{ height: "200px" }}
                />
                <button 
                  className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md"
                  onClick={() => setShowAllPhotos(true)}
                >
                  <Grid size={16} /> Show all photos
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 px-6 mb-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">{smoothie.name} in a glass</h2>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`h-5 w-5 ${star <= (smoothie.recipe?.rating || 4.5) 
                        ? "text-coral-500 fill-coral-500" 
                        : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 font-medium">
                  {(smoothie.recipe?.rating || 4.5).toFixed(1)} · {smoothie.recipe?.reviews || 271} reviews
                </span>
              </div>
              <p className="text-gray-700 mb-4">{smoothie.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Calories</p>
                  <p className="font-semibold text-coral-600">{smoothie.nutrition.calories}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Protein</p>
                  <p className="font-semibold text-mint-600">{smoothie.nutrition.protein}g</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Carbs</p>
                  <p className="font-semibold text-lavender-600">{smoothie.nutrition.carbs}g</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Fat</p>
                  <p className="font-semibold text-sky-600">{smoothie.nutrition.fat}g</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Level</p>
              <p className="font-semibold">{smoothie.recipe?.difficulty || "Easy"}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Total Time</p>
              <p className="font-semibold">{smoothie.recipe?.totalTime || 10} min</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Servings</p>
              <p className="font-semibold">{smoothie.recipe?.servings || 1}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Prep Time</p>
              <p className="font-semibold">{smoothie.recipe?.prepTime || 5} min</p>
            </div>
          </div>
          
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
          
          <LoginDialog isOpen={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} />
          
          <CollectionDialog 
            isOpen={collectionDialogOpen} 
            onClose={() => setCollectionDialogOpen(false)} 
            smoothieId={smoothieId || ''}
            smoothieName={smoothie.name}
          />
        </div>
      }
    />
  );
};

export default RecipeDetailPage;
