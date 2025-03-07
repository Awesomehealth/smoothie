
import { motion } from "framer-motion";
import FilterButton from "./FilterButton";

interface FilterRowProps {
  filters: Array<{
    label: string;
    filterType: string;
    options: string[];
  }>;
  onFilterSelect: (filterType: string, value: string) => void;
  delay?: number;
}

const FilterRow = ({ filters, onFilterSelect, delay = 0.2 }: FilterRowProps) => {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 w-full mx-auto overflow-x-auto pb-4 mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex flex-nowrap justify-center gap-4 w-full">
        {filters.map((filter) => (
          <FilterButton
            key={filter.filterType}
            label={filter.label}
            options={filter.options}
            onSelect={(value) => onFilterSelect(filter.filterType, value)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FilterRow;
