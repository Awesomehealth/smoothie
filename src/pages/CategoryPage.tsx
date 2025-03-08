
import { useParams } from "react-router-dom";
import { categories } from "@/data/categories";
import { smoothies } from "@/data/smoothiesData";
import CategorySidebar from "@/components/CategorySidebar";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, Clock, Dumbbell, Trophy, ArrowRight, Utensils, Wheat, Droplet } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import SearchSection from "@/components/sections/SearchSection";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  
  // Find the category data based on the URL parameter
  const category = categories.find((cat) => cat.id === categoryId);
  
  // Filter smoothies by category
  const categorySmoothies = smoothies.filter(
    (smoothie) => smoothie.categories.includes(categoryId || '')
  );

  // Filter smoothies by search query within the category
  const filteredSmoothies = searchQuery
    ? categorySmoothies.filter(
        (smoothie) =>
          smoothie.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          smoothie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          smoothie.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : categorySmoothies;

  // Specific content for post-workout
  const isPostWorkout = categoryId === 'post-workout';

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleUrlSubmit = (url: string) => {
    console.log("URL submitted:", url);
    // For future implementation
  };

  const handleAdvancedSearchToggle = (show: boolean) => {
    setShowAdvancedSearch(show);
  };

  const handleFilterSelect = (filterType: string, value: string) => {
    console.log("Filter selected:", filterType, value);
    // Filter functionality will be implemented later
  };

  const handleDietaryToggle = (preference: string, isChecked: boolean) => {
    console.log("Dietary preference toggled:", preference, isChecked);
    // Dietary filter functionality will be implemented later
  };
  
  // Handle image error for smoothie cards
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/placeholder.svg";
    target.onerror = null; // Prevent infinite loops
    
    // Notify user about the image loading issue with a toast
    toast({
      title: "Image couldn't load",
      description: "Using a placeholder image instead",
      variant: "default",
    });
  };
  
  return (
    <SmoothieAppLayout
      sidebar={
        <CategorySidebar
          selectedCategory={categoryId || null}
          onCategorySelect={() => {}}
          showAdvancedSearch={showAdvancedSearch}
          onAdvancedSearchToggle={handleAdvancedSearchToggle}
        />
      }
      mainContent={
        <div className="w-full max-w-7xl mx-auto p-8">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold">{category?.name || "Category"}</h1>
              {isPostWorkout && <span className={`px-2 py-1 text-xs font-medium rounded-full ${category?.tagStyle}`}>{category?.tag}</span>}
            </div>
            <p className="text-gray-600 max-w-2xl">
              {isPostWorkout 
                ? "Replenish your energy and support muscle recovery with these nutritious post-workout smoothies designed to maximize your fitness results."
                : `Explore our collection of ${category?.name} smoothies.`
              }
            </p>
          </header>
          
          {/* Search Section with Advanced Search */}
          <div className="mb-8">
            {showAdvancedSearch ? (
              <SearchSection 
                onSearch={handleSearch}
                onFilterSelect={handleFilterSelect}
                onDietaryToggle={handleDietaryToggle}
                showAdvancedSearch={showAdvancedSearch}
                hideHeading={true} // Pass prop to hide the heading in category pages
              />
            ) : (
              <div className="mb-8 max-w-3xl mx-auto">
                <SearchBar 
                  onSearch={handleSearch}
                  onUrlSubmit={handleUrlSubmit}
                  placeholder={`Search within ${category?.name || "this category"}...`}
                />
              </div>
            )}
          </div>
          
          {isPostWorkout && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="bg-gradient-to-br from-lavender-50 to-lavender-100 p-6 border-0 shadow-md rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-lavender-500 rounded-full p-2 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">30-Minute Window</h3>
                </div>
                <p className="text-gray-700">Consume within 30 minutes after your workout to optimize recovery and nutrient absorption.</p>
              </Card>
              
              <Card className="bg-gradient-to-br from-mint-50 to-mint-100 p-6 border-0 shadow-md rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-mint-500 rounded-full p-2 text-white">
                    <Dumbbell className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Protein Rich</h3>
                </div>
                <p className="text-gray-700">High-quality protein helps repair muscle tissue and supports growth after intense exercise.</p>
              </Card>
              
              <Card className="bg-gradient-to-br from-coral-50 to-coral-100 p-6 border-0 shadow-md rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-coral-500 rounded-full p-2 text-white">
                    <HeartPulse className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Recovery Boost</h3>
                </div>
                <p className="text-gray-700">These smoothies contain ingredients that reduce inflammation and speed up recovery time.</p>
              </Card>
            </div>
          )}
          
          {filteredSmoothies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSmoothies.map((smoothie) => (
                <motion.div
                  key={smoothie.id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    {/* Larger image section with error handling */}
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      {smoothie.image && (
                        <img 
                          src={smoothie.image} 
                          alt={smoothie.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                          onError={handleImageError}
                        />
                      )}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {smoothie.categories.map((cat, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 text-xs font-medium rounded-full bg-white/80 backdrop-blur-sm shadow-sm"
                          >
                            {cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <CardContent className="p-5 flex-grow flex flex-col">
                      <h3 className="font-bold text-xl mb-2 text-gray-800">{smoothie.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{smoothie.description}</p>
                      
                      {/* Nutrition facts display */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4 grid grid-cols-4 gap-2">
                        <div className="flex flex-col items-center justify-center p-2 rounded-md bg-lavender-50">
                          <Trophy className="h-4 w-4 text-lavender-600 mb-1" />
                          <span className="text-xs text-gray-500">Protein</span>
                          <span className="font-bold text-sm">{smoothie.nutrition.protein}g</span>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center p-2 rounded-md bg-mint-50">
                          <Wheat className="h-4 w-4 text-mint-600 mb-1" />
                          <span className="text-xs text-gray-500">Carbs</span>
                          <span className="font-bold text-sm">{smoothie.nutrition.carbs}g</span>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center p-2 rounded-md bg-sky-50">
                          <Droplet className="h-4 w-4 text-sky-600 mb-1" />
                          <span className="text-xs text-gray-500">Fats</span>
                          <span className="font-bold text-sm">{smoothie.nutrition.fat}g</span>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center p-2 rounded-md bg-coral-50">
                          <Utensils className="h-4 w-4 text-coral-600 mb-1" />
                          <span className="text-xs text-gray-500">Calories</span>
                          <span className="font-bold text-sm">{smoothie.nutrition.calories}</span>
                        </div>
                      </div>
                      
                      {/* Button for viewing recipe */}
                      <button className="w-full py-2.5 px-4 bg-lavender-100 hover:bg-lavender-200 text-lavender-700 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                        View Recipe
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No smoothies found for "{searchQuery}" in this category.</p>
            </div>
          )}
        </div>
      }
    />
  );
};

export default CategoryPage;
