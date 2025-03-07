
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import FilterButton from "@/components/FilterButton";
import ToggleSwitch from "@/components/ToggleSwitch";
import CategoryCard from "@/components/CategoryCard";
import SmoothieCard from "@/components/SmoothieCard";
import { categories } from "@/data/categories";
import { 
  smoothies, 
  proteinOptions, 
  dietOptions, 
  proteinAmounts, 
  carbAmounts, 
  fatAmounts, 
  calorieRanges,
  Smoothie
} from "@/data/smoothies";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSmoothies, setFilteredSmoothies] = useState<Smoothie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    proteinType: "",
    diet: "",
    protein: "",
    carbs: "",
    fats: "",
    calories: "",
  });
  const [dietaryPreferences, setDietaryPreferences] = useState({
    isGlutenFree: false,
    isNutFree: false,
    isSoyFree: false,
    isSugarFree: false,
    hasCaffeine: false,
    isMealReplacement: false,
  });

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Handle filter selection
  const handleFilterSelect = (filterType: keyof typeof filters, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  // Handle dietary toggle
  const handleDietaryToggle = (preference: keyof typeof dietaryPreferences, isChecked: boolean) => {
    setDietaryPreferences({
      ...dietaryPreferences,
      [preference]: isChecked,
    });
  };

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  // Filter smoothies based on all criteria
  useEffect(() => {
    let result = [...smoothies];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (smoothie) =>
          smoothie.name.toLowerCase().includes(query) ||
          smoothie.description.toLowerCase().includes(query) ||
          smoothie.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query))
      );
    }

    // Filter by selected category
    if (selectedCategory) {
      result = result.filter((smoothie) => 
        smoothie.categories.includes(selectedCategory)
      );
    }

    // Filter by protein type
    if (filters.proteinType) {
      result = result.filter((smoothie) => 
        smoothie.proteinType.includes(filters.proteinType as any)
      );
    }

    // Filter by dietary preferences
    Object.entries(dietaryPreferences).forEach(([key, isSelected]) => {
      if (isSelected) {
        result = result.filter((smoothie) => 
          smoothie.dietaryInfo[key as keyof typeof smoothie.dietaryInfo]
        );
      }
    });

    // Filter by protein amount
    if (filters.protein) {
      result = result.filter((smoothie) => {
        const protein = smoothie.nutrition.protein;
        if (filters.protein === "high") return protein > 20;
        if (filters.protein === "medium") return protein >= 10 && protein <= 20;
        if (filters.protein === "low") return protein < 10;
        return true;
      });
    }

    // Filter by carbs amount
    if (filters.carbs) {
      result = result.filter((smoothie) => {
        const carbs = smoothie.nutrition.carbs;
        if (filters.carbs === "high") return carbs > 30;
        if (filters.carbs === "medium") return carbs >= 15 && carbs <= 30;
        if (filters.carbs === "low") return carbs < 15;
        return true;
      });
    }

    // Filter by fats amount
    if (filters.fats) {
      result = result.filter((smoothie) => {
        const fat = smoothie.nutrition.fat;
        if (filters.fats === "high") return fat > 15;
        if (filters.fats === "medium") return fat >= 8 && fat <= 15;
        if (filters.fats === "low") return fat < 8;
        return true;
      });
    }

    // Filter by calorie range
    if (filters.calories) {
      result = result.filter((smoothie) => {
        const calories = smoothie.nutrition.calories;
        if (filters.calories === "100-200") return calories >= 100 && calories < 200;
        if (filters.calories === "200-300") return calories >= 200 && calories < 300;
        if (filters.calories === "300-400") return calories >= 300 && calories < 400;
        if (filters.calories === "400-500") return calories >= 400 && calories < 500;
        if (filters.calories === "500+") return calories >= 500;
        return true;
      });
    }

    setFilteredSmoothies(result);
  }, [searchQuery, selectedCategory, filters, dietaryPreferences]);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-smoothie-50">
      {/* Hero Section with Search */}
      <section className="hero-section py-20">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Perfect Smoothie
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover delicious, nutritious smoothie recipes tailored to your taste and health goals.
            </p>
            <SearchBar onSearch={handleSearch} />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FilterButton 
              label="Protein Type" 
              options={proteinOptions} 
              onSelect={(option) => handleFilterSelect("proteinType", option)} 
            />
            <FilterButton 
              label="Type of Diet" 
              options={dietOptions} 
              onSelect={(option) => handleFilterSelect("diet", option)} 
            />
            <FilterButton 
              label="Protein" 
              options={proteinAmounts} 
              onSelect={(option) => handleFilterSelect("protein", option)} 
            />
            <FilterButton 
              label="Carbs" 
              options={carbAmounts} 
              onSelect={(option) => handleFilterSelect("carbs", option)} 
            />
            <FilterButton 
              label="Fats" 
              options={fatAmounts} 
              onSelect={(option) => handleFilterSelect("fats", option)} 
            />
            <FilterButton 
              label="Calories" 
              options={calorieRanges} 
              onSelect={(option) => handleFilterSelect("calories", option)} 
            />
          </motion.div>

          {/* Dietary Preferences */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ToggleSwitch 
              label="Meal Replacement" 
              onChange={(isChecked) => handleDietaryToggle("isMealReplacement", isChecked)} 
            />
            <ToggleSwitch 
              label="Gluten-Free" 
              onChange={(isChecked) => handleDietaryToggle("isGlutenFree", isChecked)} 
            />
            <ToggleSwitch 
              label="Nut-Free" 
              onChange={(isChecked) => handleDietaryToggle("isNutFree", isChecked)} 
            />
            <ToggleSwitch 
              label="Soy-Free" 
              onChange={(isChecked) => handleDietaryToggle("isSoyFree", isChecked)} 
            />
            <ToggleSwitch 
              label="Sugar Free" 
              onChange={(isChecked) => handleDietaryToggle("isSugarFree", isChecked)} 
            />
            <ToggleSwitch 
              label="Caffeine" 
              onChange={(isChecked) => handleDietaryToggle("hasCaffeine", isChecked)} 
            />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Popular Categories
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Explore our most popular smoothie collections
          </p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <CategoryCard 
                key={category.id} 
                category={category}
                onClick={handleCategorySelect}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-smoothie-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            {selectedCategory 
              ? `${categories.find(c => c.id === selectedCategory)?.name || 'Results'}`
              : searchQuery 
                ? `Search Results for "${searchQuery}"`
                : "All Smoothies"
            }
          </h2>
          <p className="text-gray-600 text-center mb-10">
            {filteredSmoothies.length} 
            {filteredSmoothies.length === 1 ? ' recipe' : ' recipes'} found
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSmoothies.length > 0 ? (
              filteredSmoothies.map((smoothie) => (
                <SmoothieCard key={smoothie.id} smoothie={smoothie} />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  No smoothies found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Smoothie Search Engine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
