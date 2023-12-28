import bubbleIcon from "../../assets/main/bubble.svg";

const SearchBar = () => {
  return (
    <div className="flex w-full space-x-3 rounded-full bg-white p-3 shadow-sm">
      <img src={bubbleIcon} alt="bubbleIcon" />
      <input
        type="text"
        placeholder="ค้นหาชื่อสัตว์เลี้ยง"
        className="text-medium focus: w-full text-johnjud-gray outline-none"
      />
    </div>
  );
};

export default SearchBar;
