import { useState, useEffect } from "react";
import { tv } from "tailwind-variants";
import FilterPanel from "./FilterPanel";
import { NumberInput, ToggleInput } from "./Input";

interface FilterProps {
  isOpen: boolean;
}

const filter = tv({
  slots: {
    base: "absolute right-0 mt-4 space-y-4 rounded-2xl bg-white p-4 shadow",
    headingContainer: "space-y-1",
    heading: "text-accent-red font-semibold",
    headingLine: "bg-accent-red h-0.5 w-60 rounded-full",
    filterContainer: "space-y-3 max-h-72 overflow-y-auto",
  },
  variants: {
    isOpen: {
      true: "block",
      false: "hidden",
    },
  },
});

const Filter = ({ isOpen }: FilterProps) => {
  const { base, headingContainer, heading, headingLine, filterContainer } =
    filter({ isOpen });
  

  const [filters, setFilters] = useState({
    dog: false,
    cat: false,
    male: false,
    female: false,
    white: false,
    black: false,
    brown: false,
    blonde: false,
    minAge: 0,
    maxAge: 100,
  });

  const handleToggleChange = (filterKey: keyof typeof filters) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: event.target.type === 'checkbox' ? event.target.checked : Number(event.target.value),
    }));
  };

  const handleAgeChange = (key: 'minAge' | 'maxAge', value: number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
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
          <NumberInput
            id="age-min"
            text="ต่ำสุด"
            value={filters.minAge}
            setValue={(value) => handleAgeChange('minAge', value)}
          />
          <NumberInput
            id="age-max"
            text="สูงสุด"
            value={filters.maxAge}
            setValue={(value) => handleAgeChange('maxAge', value)}
          />
        </FilterPanel>
      </div>
    </div>
  );
};

export default Filter;
