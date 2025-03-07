
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface FilterButtonProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

const FilterButton = ({ label, options, onSelect }: FilterButtonProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="filter-button">
        {label}
        <ChevronDown className="h-4 w-4 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-xl p-2 animate-fade-in">
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            className={`cursor-pointer capitalize rounded-lg transition-colors px-3 py-2 text-sm ${
              selectedOption === option ? "bg-coral-50 text-coral-700" : ""
            }`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterButton;
