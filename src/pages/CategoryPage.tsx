
import { useParams } from "react-router-dom";
import { categories } from "@/data/categories";
import { smoothies } from "@/data/smoothies";
import CategorySidebar from "@/components/CategorySidebar";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import { Card } from "@/components/ui/card";
import { HeartPulse, Clock, Dumbbell, Trophy, ArrowRight, Utensils } from "lucide-react";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Find the category data based on the URL parameter
  const category = categories.find((cat) => cat.id === categoryId);
  
  // Filter smoothies by category
  const categorySmoothies = smoothies.filter(
    (smoothie) => smoothie.categories.includes(categoryId || '')
  );

  // Specific content for post-workout
  const isPostWorkout = categoryId === 'post-workout';
  
  return (
    <SmoothieAppLayout
      sidebar={
        <CategorySidebar
          selectedCategory={categoryId || null}
          onCategorySelect={() => {}}
          showAdvancedSearch={false}
          onAdvancedSearchToggle={() => {}}
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
          
          {categorySmoothies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorySmoothies.map((smoothie) => (
                <Card key={smoothie.id} className="overflow-hidden border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="aspect-video w-full overflow-hidden bg-gray-100">
                    <img 
                      src={smoothie.image} 
                      alt={smoothie.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1">{smoothie.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{smoothie.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <div className="flex items-center text-sm">
                          <Trophy className="h-4 w-4 text-amber-500 mr-1" />
                          <span>{smoothie.nutrition.protein}g protein</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Utensils className="h-4 w-4 text-coral-500 mr-1" />
                          <span>{smoothie.nutrition.calories} cal</span>
                        </div>
                      </div>
                      
                      <button className="p-2 rounded-full bg-lavender-100 text-lavender-700 hover:bg-lavender-200 transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No smoothies found in this category.</p>
            </div>
          )}
        </div>
      }
    />
  );
};

export default CategoryPage;
