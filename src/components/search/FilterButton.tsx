
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface FilterButtonProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

const FilterButton = ({ label, options, onSelect }: FilterButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
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

  return (
    <div className="relative flex-1 max-w-[150px]" ref={dropdownRef}>
      <button 
        onClick={toggleOpen}
        className="w-full rounded-full border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 flex items-center justify-between gap-1 whitespace-nowrap"
      >
        {label} <ChevronDown size={14} />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full min-w-[150px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="py-1 max-h-60 overflow-y-auto">
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
