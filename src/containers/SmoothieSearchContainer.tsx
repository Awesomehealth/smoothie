
import { useState, useEffect } from "react";
import { smoothies, Smoothie } from "@/data/smoothies";
import { toast } from "@/components/ui/use-toast";
import { filterSmoothies } from "@/utils/filterUtils";

interface SmoothieSearchContainerProps {
  children: (props: {
    filteredSmoothies: Smoothie[];
    searchQuery: string;
    selectedCategory: string | null;
    showAdvancedSearch: boolean;
    filters: Record<string, string>;
    dietaryPreferences: Record<string, boolean>;
    handleSearch: (query: string) => void;
    handleImageUpload: (file: File) => void;
    handleFilterSelect: (filterType: string, value: string) => void;
    handleDietaryToggle: (preference: string, isChecked: boolean) => void;
    handleCategorySelect: (categoryId: string) => void;
    handleAdvancedSearchToggle: (show: boolean) => void;
  }) => React.ReactNode;
}

const SmoothieSearchContainer = ({ children }: SmoothieSearchContainerProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSmoothies, setFilteredSmoothies] = useState<Smoothie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
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
    console.log("Search query:", query);
    
    if (query.startsWith("url:")) {
      // Handle URL-based search
      const url = query.substring(4);
      toast({
        title: "Recipe Extracted",
        description: `We've analyzed the recipe from ${url}`,
        duration: 5000,
      });
    }
  };

  const handleImageUpload = (file: File) => {
    console.log("Image uploaded:", file.name);
    // In a real application, you would process the image here
    toast({
      title: "Image Uploaded",
      description: `We'll analyze ${file.name} and suggest matching smoothie recipes.`,
      duration: 5000,
    });
    
    // Simulate finding similar smoothies based on image
    const randomSmoothies = [...smoothies].sort(() => 0.5 - Math.random()).slice(0, 4);
    setFilteredSmoothies(randomSmoothies);
  };

  const handleFilterSelect = (filterType: keyof typeof filters, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
    console.log(`Filter selected: ${filterType} = ${value}`);
  };

  const handleDietaryToggle = (preference: keyof typeof dietaryPreferences, isChecked: boolean) => {
    setDietaryPreferences({
      ...dietaryPreferences,
      [preference]: isChecked,
    });
    console.log(`Dietary preference toggled: ${preference} = ${isChecked}`);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    console.log("Selected category:", categoryId);
  };

  const handleAdvancedSearchToggle = (show: boolean) => {
    setShowAdvancedSearch(show);
    console.log("Advanced search toggled:", show);
  };

  // Filter the smoothies whenever the relevant state changes
  useEffect(() => {
    const result = filterSmoothies(
      smoothies,
      searchQuery,
      selectedCategory,
      filters,
      dietaryPreferences
    );
    setFilteredSmoothies(result);
  }, [searchQuery, selectedCategory, filters, dietaryPreferences]);

  return children({
    filteredSmoothies,
    searchQuery,
    selectedCategory,
    showAdvancedSearch,
    filters,
    dietaryPreferences,
    handleSearch,
    handleImageUpload,
    handleFilterSelect,
    handleDietaryToggle,
    handleCategorySelect,
    handleAdvancedSearchToggle,
  });
};

export default SmoothieSearchContainer;
