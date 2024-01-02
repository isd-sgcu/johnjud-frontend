import { useState } from "react";
import catEffectIcon from "../../assets/main/cat-primary.svg";
import catIcon from "../../assets/main/cat.svg";
import dogEffectIcon from "../../assets/main/dog-primary.svg";
import dogIcon from "../../assets/main/dog.svg";

const Filter = () => {
  // There are 3 states for filtering in home search (all, dog, cat)
  const [filter, setFilter] = useState<string>("all");

  return (
    <div className="flex space-x-3">
      <button
        className={`flex items-center justify-center py-3 shadow transition-all duration-500
            ${
              filter === "all"
                ? "flex-row rounded-full bg-primary px-6 text-white"
                : "flex-col rounded-2xl bg-white px-2.5 text-xs text-johnjud-gray"
            } shrink-0`}
        onClick={() => setFilter("all")}
      >
        <span>สัตว์เลี้ยง</span>
        <span>ทั้งหมด</span>
      </button>
      <button
        className={`flex items-center justify-center  space-x-2.5 rounded-2xl py-3 shadow transition-all duration-500
            ${filter === "cat" ? "bg-primary px-12" : "bg-white px-6"}
            `}
        onClick={() => setFilter("cat")}
      >
        <img
          src={filter == "cat" ? catEffectIcon : catIcon}
          alt="catIcon"
          className={`${filter === "cat" ? "h-7 w-7" : "h-6 w-6"}`}
        />
        {filter == "cat" ? (
          <span className="text-lg text-white">แมว</span>
        ) : null}
      </button>
      <button
        className={`flex items-center justify-center  space-x-2.5 rounded-2xl py-3 shadow transition-all duration-500 
          ${filter === "dog" ? "bg-primary px-12" : "bg-white px-6"}
          `}
        onClick={() => setFilter("dog")}
      >
        <img
          src={filter === "dog" ? dogEffectIcon : dogIcon}
          alt="dogIcon"
          className={"h-6 w-6"}
        />
        {filter == "dog" ? (
          <span className="text-lg text-white">สุนัข</span>
        ) : null}
      </button>
    </div>
  );
};

export default Filter;
