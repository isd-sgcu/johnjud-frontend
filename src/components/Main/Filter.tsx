import Button from "@/components/Button";
import { filterState } from "@/types/filter";
import { all } from "node_modules/axios/index.d.cts";

interface FilterProps {
  filters: filterState;
  setFilters: (filters: filterState) => void;
}

const Filter: React.FC<FilterProps> = ({filters, setFilters}) => {
  
  const allSelected = filters.dog && filters.cat;
  const catSelected = filters.cat && !filters.dog;
  const dogSelected = filters.dog && !filters.cat;

  return (
    <div className="flex space-x-3">
      <Button
        text={"สัตว์เลี้ยงทั้งหมด"}
        variant={allSelected ? "primary" : "white"}
        className={`flex items-center justify-center py-3 shadow transition-all duration-500
            ${
              allSelected
                ? "flex-row bg-primary px-6 text-white"
                : "flex-col bg-white px-2.5 text-xs text-accent-gray"
            } shrink-0`}
        rounded="2xl"
        onClick={() => setFilters(
          {
            ...filters,
            dog: !allSelected,
            cat: !allSelected,
          }
        )}
      />
      <Button
        text={catSelected? "แมว" : ""}
        variant={catSelected? "primary" : "white"}
        icon={catSelected? "custom:md:cat-green" : "custom:md:cat-gray"}
        className={`flex items-center justify-center space-x-2.5 py-3 shadow transition-all duration-500
            ${catSelected ? "bg-primary px-12" : "bg-white pl-6 pr-4"}
          `}
        rounded="2xl"
        onClick={() => setFilters({
          ...filters,
          dog: false,
          cat: !catSelected,
        }
        )}
      />
      <Button
        text={
          dogSelected? "สุนัข" : ""}
        variant={
          dogSelected? "primary" : "white"}
        icon={
          dogSelected? "custom:md:dog-white" : "custom:md:dog-gray"}
        className={`flex items-center justify-center space-x-2.5 py-3 shadow transition-all duration-500 
          ${
            dogSelected? "bg-primary px-12" : "bg-white pl-6 pr-4"}
          `}
        rounded="2xl"
        onClick={() => setFilters(
          { ...filters,
            dog: !dogSelected,
            cat: false,
          }
        )}
      />
    </div>
  );
};

export default Filter;
