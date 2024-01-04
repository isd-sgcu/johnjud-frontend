import { tv } from "tailwind-variants";
import FilterButton from "./FilterButton";

interface FilterPanelProps {
  isOpen: boolean;
}

const filterPanel = tv({
  slots: {
    base: "absolute right-0 mt-4 space-y-4 rounded-2xl bg-white p-4 shadow",
    headingContainer: "space-y-1",
    heading: "text-accent-red font-semibold",
    headingLine: "bg-accent-red h-0.5 w-60 rounded-full",
    filterContainer: "space-y-3",
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
        <FilterButton text="เพศ" />
        <FilterButton text="สี" />
        <FilterButton text="อายุ" />
        <FilterButton text="ที่มา" />
      </div>
    </div>
  );
};

export default FilterPanel;
