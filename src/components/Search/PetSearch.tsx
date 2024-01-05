import { Icon } from "@iconify/react";

const PetSearch = () => {
  return (
    <div className="flex w-full flex-row items-center justify-start gap-3 rounded-full bg-white px-6 py-3 shadow">
      <div>
        <Icon icon="@custom:md:bubble-red" className="h-6 w-6" />
      </div>
      <input
        type="text"
        placeholder="ค้นหาสัตว์เลี้ยง"
        className="w-full py-0 outline-none"
      />
    </div>
  );
};

export default PetSearch;
