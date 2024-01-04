import { tv } from "tailwind-variants";
import FilterButton from "./FilterButton";
import { NumberInput, ToggleInput } from "./Input";

interface FilterPanelProps {
  isOpen: boolean;
}

const filterPanel = tv({
  slots: {
    base: "absolute right-0 mt-4 space-y-4 rounded-2xl bg-white p-4 shadow",
    headingContainer: "space-y-1",
    heading: "text-accent-red font-semibold",
    headingLine: "bg-accent-red h-0.5 w-60 rounded-full",
    filterContainer: "space-y-3 max-h-96 overflow-y-auto",
  },
  variants: {
    isOpen: {
      true: "block",
      false: "hidden",
    },
  },
});

const FilterPanel = ({ isOpen }: FilterPanelProps) => {
  const { base, headingContainer, heading, headingLine, filterContainer } =
    filterPanel({ isOpen });

  return (
    <div className={base()}>
      <div className={headingContainer()}>
        <h3 className={heading()}>เพิ่มตัวกรองการค้นหา</h3>
        <div className={headingLine()}></div>
      </div>
      <div className={filterContainer()}>
        <FilterButton text="ประเภทสัตว์เลี้ยง" />
        <div className="flex flex-wrap items-center justify-center gap-2">
          <ToggleInput id="type-dog" text="สุนัข" />
          <ToggleInput id="type-cat" text="แมว" />
        </div>
        <FilterButton text="เพศ" />
        <div className="flex flex-wrap items-center justify-center gap-2">
          <ToggleInput id="gender-male" text="ผู้" />
          <ToggleInput id="gender-female" text="เมีย" />
        </div>
        <FilterButton text="สี" />
        <div className="flex flex-wrap items-center justify-center gap-2">
          <ToggleInput id="color-white" text="ขาว" />
          <ToggleInput id="color-black" text="ดำ" />
          <ToggleInput id="color-brown" text="น้ำตาล" />
          <ToggleInput id="color-blonde" text="บลอนด์" />
        </div>
        <FilterButton text="อายุ" />
        <div className="flex flex-wrap items-center justify-center gap-2">
          <NumberInput id="age-min" text="ต่ำสุด" />
          <NumberInput id="age-max" text="สูงสุด" />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
