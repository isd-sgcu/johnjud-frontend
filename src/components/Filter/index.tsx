import { filterState } from "@/types/filter";
import { useState } from "react";
import { tv } from "tailwind-variants";
import FilterPanel from "./FilterPanel";
import { ToggleInput } from "./Input";
interface FilterProps {
  isOpen: boolean;
  filters: filterState;
  setFilters: (filter: filterState) => void;
}

const filter = tv({
  slots: {
    base: "absolute right-0 mt-4 space-y-4 rounded-2xl bg-white p-4 shadow z-40",
    headingContainer: "space-y-1",
    heading: "text-accent-red font-semibold",
    headingLine: "bg-accent-red h-0.5 w-72 rounded-full",
    filterContainer: "space-y-3 max-h-72 overflow-y-auto",
  },
  variants: {
    isOpen: {
      true: "block",
      false: "hidden",
    },
  },
});

const Filter = ({ isOpen, filters, setFilters }: FilterProps) => {
  const { base, headingContainer, heading, headingLine, filterContainer } =
    filter({ isOpen });

  const handleToggleChange =
    (filterKey: keyof filterState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedFilters = {
        ...filters,
        [filterKey]: event.target.checked,
      };
      setFilters(updatedFilters);
    };

  const [ageState, setAgeState] = useState<"kid" | "adult" | "old" | "overall">(
    "overall"
  );

  const handleAgeChange = (value: "kid" | "adult" | "old" | "overall") => {
    const updatedFilters = {
      ...filters,
    };

    if (value === ageState) {
      setAgeState("overall");
      updatedFilters.minAge = 0;
      updatedFilters.maxAge = 30;
    } else {
      setAgeState(value);
      if (value === "kid") {
        updatedFilters.minAge = 0;
        updatedFilters.maxAge = 1;
      } else if (value === "adult") {
        updatedFilters.minAge = 1;
        updatedFilters.maxAge = 6;
      } else if (value === "old") {
        updatedFilters.minAge = 7;
        updatedFilters.maxAge = 30;
      }
    }

    setFilters(updatedFilters);
  };

  return (
    <div className={base()}>
      <div className={headingContainer()}>
        <h3 className={heading()}>เพิ่มตัวกรองการค้นหา</h3>
        <div className={headingLine()}></div>
      </div>
      <div className={filterContainer()}>
        <FilterPanel heading="ประเภทสัตว์เลี้ยง">
          <ToggleInput
            id="type-dog"
            text="สุนัข"
            checked={filters.dog}
            onChange={handleToggleChange("dog")}
          />
          <ToggleInput
            id="type-cat"
            text="แมว"
            checked={filters.cat}
            onChange={handleToggleChange("cat")}
          />
        </FilterPanel>

        <FilterPanel heading="เพศ">
          <ToggleInput
            id="gender-male"
            text="ผู้"
            checked={filters.male}
            onChange={handleToggleChange("male")}
          />
          <ToggleInput
            id="gender-female"
            text="เมีย"
            checked={filters.female}
            onChange={handleToggleChange("female")}
          />
        </FilterPanel>

        <FilterPanel heading="สี">
          <ToggleInput
            id="color-white"
            text="ขาว"
            checked={filters.white}
            onChange={handleToggleChange("white")}
          />
          <ToggleInput
            id="color-black"
            text="ดำ"
            checked={filters.black}
            onChange={handleToggleChange("black")}
          />
          <ToggleInput
            id="color-brown"
            text="น้ำตาล"
            checked={filters.brown}
            onChange={handleToggleChange("brown")}
          />
          <ToggleInput
            id="color-blonde"
            text="บลอนด์"
            checked={filters.blonde}
            onChange={handleToggleChange("blonde")}
          />
        </FilterPanel>

        <FilterPanel heading="อายุ">
          {/* <NumberInput
            id="age-min"
            text="ต่ำสุด"
            value={filters.minAge}
            setValue={(value) => handleAgeChange(""minAge", value")}
          />
          <NumberInput
            id="age-max"
            text="สูงสุด"
            value={filters.maxAge}
            setValue={(value) => handleAgeChange("maxAge", value)}
          /> */}
          <ToggleInput
            id="age-kid"
            text="เด็ก"
            checked={ageState === "kid"}
            onChange={() => handleAgeChange("kid")}
          />
          <ToggleInput
            id="age-adult"
            text="โต"
            checked={ageState === "adult"}
            onChange={() => handleAgeChange("adult")}
          />
          <ToggleInput
            id="age-old"
            text="สูงวัย"
            checked={ageState === "old"}
            onChange={() => handleAgeChange("old")}
          />
        </FilterPanel>
      </div>
    </div>
  );
};

export default Filter;
