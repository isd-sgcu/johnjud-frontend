import magnifyingGlassesIcon from "../../../assets/main/magnify-glass.svg";

const SearchBar = () => {
  return (
    <div className="flex w-full space-x-3 rounded-full bg-white px-6 py-3 shadow">
      <img src={magnifyingGlassesIcon} alt="magnifyingGlassesIcon" />
      <input
        type="text"
        placeholder="ค้นหาสัตว์เลี้ยง"
        className="text-medium focus: w-full text-accent-gray outline-none"
      />
    </div>
  );
};

export default SearchBar;
