import { Icon } from "@iconify/react";

const SearchBar = () => {
  return (
    <div className="flex w-full space-x-3 rounded-full bg-white px-6 py-3 shadow">
      <Icon icon="@custom:md:bubble-green" className="h-6 w-6" />
      <input
        type="text"
        placeholder="ค้นหาสัตว์เลี้ยง"
        className="text-medium focus: w-full text-accent-gray outline-none"
      />
    </div>
  );
};

export default SearchBar;
