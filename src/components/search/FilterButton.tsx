
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FilterButtonProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

const FilterButton = ({ label, options, onSelect }: FilterButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleOpen}
        className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 flex items-center gap-1 whitespace-nowrap"
      >
        {label} <ChevronDown size={14} />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleSelect(option)}
              >
                {typeof option === 'string' && option.includes('-') 
                  ? option.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-')
                  : option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
