import { filterState } from "@/types/filter";
import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
/*
  for pets page use : @custom:md:bubble-red
  for home page use: @custom:md:bubble-green
*/
interface PetSearchProps {
  variant: "red" | "green";
  filter: filterState;
  setFilters: React.Dispatch<React.SetStateAction<filterState>>;
}

const PetSearch: React.FC<PetSearchProps> = ({
  variant,
  filter,
  setFilters,
}) => {
  const [inputValue, setInputValue] = React.useState<string>(
    filter.search || ""
  );

  // add debouce time for delay
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setFilters({ ...filter, search: inputValue });
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [inputValue, setFilters, filter]);

  return (
    <div className="flex w-full flex-row items-center justify-start gap-3 rounded-full bg-white px-6 py-3 shadow">
      <div>
        <Icon icon={`@custom:md:bubble-${variant}`} className="h-6 w-6" />
      </div>
      <input
        type="text"
        placeholder="ค้นหาสัตว์เลี้ยง"
        className="w-full py-0 outline-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default PetSearch;
