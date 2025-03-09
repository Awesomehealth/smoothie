
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterButtonProps {
  label: string;
  options: string[];
  onSelect: (values: string[]) => void;
}

const FilterButton = ({ label, options, onSelect }: FilterButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleCheckboxToggle = (option: string, checked: boolean) => {
    let newSelectedOptions: string[];
    
    if (checked) {
      newSelectedOptions = [...selectedOptions, option];
    } else {
      newSelectedOptions = selectedOptions.filter(item => item !== option);
    }
    
    setSelectedOptions(newSelectedOptions);
    onSelect(newSelectedOptions);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayLabel = selectedOptions.length > 0 
    ? `${label} (${selectedOptions.length})` 
    : label;

  return (
    <div className="relative min-w-[130px] max-w-[180px]" ref={dropdownRef}>
      <button 
        onClick={toggleOpen}
        className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 flex items-center justify-between gap-2 whitespace-nowrap"
      >
        {displayLabel} <ChevronDown size={14} />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full min-w-[180px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="py-1 max-h-60 overflow-y-auto">
            {options.map((option) => {
              const isSelected = selectedOptions.includes(option);
              const displayOption = typeof option === 'string' && option.includes('-') 
                ? option.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-')
                : option.charAt(0).toUpperCase() + option.slice(1);
              
              return (
                <div
                  key={option}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Checkbox 
                    id={`${label}-${option}`}
                    checked={isSelected}
                    onCheckedChange={(checked) => handleCheckboxToggle(option, checked === true)}
                    className="mr-2"
                  />
                  <label 
                    htmlFor={`${label}-${option}`}
                    className="flex-grow cursor-pointer"
                  >
                    {displayOption}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
