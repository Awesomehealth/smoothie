
import { useState, useEffect } from "react";
import SearchSection from "@/components/sections/SearchSection";
import FilterSection from "@/components/sections/FilterSection";
import CategorySection from "@/components/sections/CategorySection";
import ResultsSection from "@/components/sections/ResultsSection";
import Footer from "@/components/sections/Footer";
import { 
  smoothies,
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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterSelect = (filterType: keyof typeof filters, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  const handleDietaryToggle = (preference: keyof typeof dietaryPreferences, isChecked: boolean) => {
    setDietaryPreferences({
      ...dietaryPreferences,
      [preference]: isChecked,
    });
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  useEffect(() => {
    let result = [...smoothies];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (smoothie) =>
          smoothie.name.toLowerCase().includes(query) ||
          smoothie.description.toLowerCase().includes(query) ||
          smoothie.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query))
      );
    }

    if (selectedCategory) {
      result = result.filter((smoothie) => 
        smoothie.categories.includes(selectedCategory)
      );
    }

    if (filters.proteinType) {
      result = result.filter((smoothie) => 
        smoothie.proteinType.includes(filters.proteinType as any)
      );
    }

    Object.entries(dietaryPreferences).forEach(([key, isSelected]) => {
      if (isSelected) {
        result = result.filter((smoothie) => 
          smoothie.dietaryInfo[key as keyof typeof smoothie.dietaryInfo]
        );
      }
    });

    if (filters.protein) {
      result = result.filter((smoothie) => {
        const protein = smoothie.nutrition.protein;
        if (filters.protein === "high") return protein > 20;
        if (filters.protein === "medium") return protein >= 10 && protein <= 20;
        if (filters.protein === "low") return protein < 10;
        return true;
      });
    }

    if (filters.carbs) {
      result = result.filter((smoothie) => {
        const carbs = smoothie.nutrition.carbs;
        if (filters.carbs === "high") return carbs > 30;
        if (filters.carbs === "medium") return carbs >= 15 && carbs <= 30;
        if (filters.carbs === "low") return carbs < 15;
        return true;
      });
    }

    if (filters.fats) {
      result = result.filter((smoothie) => {
        const fat = smoothie.nutrition.fat;
        if (filters.fats === "high") return fat > 15;
        if (filters.fats === "medium") return fat >= 8 && fat <= 15;
        if (filters.fats === "low") return fat < 8;
        return true;
      });
    }

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

  return (
    <div className="min-h-screen bg-smoothie-50">
      <SearchSection onSearch={handleSearch} />
      <FilterSection 
        onFilterSelect={handleFilterSelect} 
        onDietaryToggle={handleDietaryToggle} 
      />
      <CategorySection onCategorySelect={handleCategorySelect} />
      <ResultsSection 
        filteredSmoothies={filteredSmoothies}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
      <Footer />
    </div>
  );
};

export default Index;
