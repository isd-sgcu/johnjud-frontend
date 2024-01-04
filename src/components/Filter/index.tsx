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

  return (
    <div className={base()}>
      <div className={headingContainer()}>
        <h3 className={heading()}>เพิ่มตัวกรองการค้นหา</h3>
        <div className={headingLine()}></div>
      </div>
      <div className={filterContainer()}>
        <FilterPanel heading="ประเภทสัตว์เลี้ยง">
          <ToggleInput id="type-dog" text="สุนัข" />
          <ToggleInput id="type-cat" text="แมว" />
        </FilterPanel>

        <FilterPanel heading="เพศ">
          <ToggleInput id="gender-male" text="ผู้" />
          <ToggleInput id="gender-female" text="เมีย" />
        </FilterPanel>

        <FilterPanel heading="สี">
          <ToggleInput id="color-white" text="ขาว" />
          <ToggleInput id="color-black" text="ดำ" />
          <ToggleInput id="color-brown" text="น้ำตาล" />
          <ToggleInput id="color-blonde" text="บลอนด์" />
        </FilterPanel>

        <FilterPanel heading="อายุ">
          <NumberInput id="age-min" text="ต่ำสุด" />
          <NumberInput id="age-max" text="สูงสุด" />
        </FilterPanel>
      </div>
    </div>
  );
};

export default Filter;
