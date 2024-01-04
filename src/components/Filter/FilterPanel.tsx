import FilterButton from "./FilterButton";

const FilterPanel = () => {
  return (
    <div className="absolute right-0 mt-4 space-y-4 rounded-2xl bg-white p-4 shadow">
      <div className="space-y-1">
        <h3 className="text-accent-red font-semibold">เพิ่มตัวกรองการค้นหา</h3>
        <div className="bg-accent-red h-0.5 w-60 rounded-full"></div>
      </div>
      <div className="space-y-3">
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
