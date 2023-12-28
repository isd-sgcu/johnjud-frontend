import catIcon from "../../assets/main/cat.svg";
import dogIcon from "../../assets/main/dog.svg";

const Filter = () => {
  return (
    <div className="flex items-center space-x-3">
      <button className="rounded-3xl bg-primary px-6 py-2.5 text-lg text-white">
        <span className="shadow-sm">สัตว์เลี้ยงทั้งหมด</span>
      </button>
      <button className="rounded-3xl bg-white px-6 py-4 shadow-md">
        <img src={catIcon} alt="dogIcon" />
      </button>
      <button className="rounded-3xl bg-white px-6 py-4 shadow-md">
        <img src={dogIcon} alt="catIcon" />
      </button>
    </div>
  );
};

export default Filter;
