
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SmoothieSearchContainerProps {
  children: (props: {
    selectedCategory: string | null;
    showAdvancedSearch: boolean;
    handleCategorySelect: (categoryId: string) => void;
    handleAdvancedSearchToggle: (show: boolean) => void;
    handleSearch: (query: string) => void;
    handleImageUpload: (file: File) => void;
    handleFilterSelect: (filter: string) => void;
    handleDietaryToggle: (option: string, active: boolean) => void;
  }) => React.ReactNode;
}

const SmoothieSearchContainer = ({ children }: SmoothieSearchContainerProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(true); // Changed to true for default on
  const navigate = useNavigate();

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    navigate(`/category/${categoryId}`);
  };

  const handleAdvancedSearchToggle = (show: boolean) => {
    setShowAdvancedSearch(show);
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Search functionality will be implemented later
  };

  const handleImageUpload = (file: File) => {
    console.log("Image uploaded:", file.name);
    // Image upload functionality will be implemented later
  };

  const handleFilterSelect = (filter: string) => {
    console.log("Filter selected:", filter);
    // Filter functionality will be implemented later
  };

  const handleDietaryToggle = (option: string, active: boolean) => {
    console.log("Dietary option toggled:", option, active);
    // Dietary filter functionality will be implemented later
  };

  return children({
    selectedCategory,
    showAdvancedSearch,
    handleCategorySelect,
    handleAdvancedSearchToggle,
    handleSearch,
    handleImageUpload,
    handleFilterSelect,
    handleDietaryToggle,
  });
};

export default SmoothieSearchContainer;
