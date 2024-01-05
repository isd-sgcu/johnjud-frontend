import { useCallback, useState } from "react";
import FilterButton from "./FilterButton";

interface FilterPanelProps {
  heading: string;
  children: React.ReactNode;
}

const FilterPanel = ({ heading, children }: FilterPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <FilterButton text={heading} isOpen={isOpen} onClick={toggleOpen} />
      {isOpen && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {children}
        </div>
      )}
    </>
  );
};

export default FilterPanel;
