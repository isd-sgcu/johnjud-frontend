import React, { useCallback, useState } from "react";
import catEffectIcon from "../../assets/main/cat-primary.svg";
import catIcon from "../../assets/main/cat.svg";
import dogEffectIcon from "../../assets/main/dog-primary.svg";
import dogIcon from "../../assets/main/dog.svg";

const Filter: React.FC = () => {
  const [filter, setFilter] = useState<string>("all"); // all, cat, dog

  const getButtonClass = useCallback(
    (selectedFilter: string): string => {
      const baseClass =
        "rounded-3xl text-base shadow-md transition-all duration-700 ease-in-out py-3";
      const activeClass =
        "bg-primary text-white px-10 rounded-full flex items-center justify-center py-3";
      const inactiveClass =
        "text-xs bg-white text-black px-6 flex flex-col items-center justify-center";

      return `${baseClass} ${
        selectedFilter === filter ? activeClass : inactiveClass
      }`;
    },
    [filter]
  );

  return (
    <div className="flex items-center space-x-3">
      {/* All button */}
      <button
        className={`${getButtonClass(
          "all"
        )} md:text-md rounded-full text-johnjud-gray sm:text-sm shrink-0`}
        onClick={() => setFilter("all")}
      >
        <span className="text-nowrap">สัตว์เลี้ยง</span>
        <span>ทั้งหมด</span>
      </button>

      {/* Dog button */}
      <button
        className={`${getButtonClass("dog")} space-x-3 shrink-0`}
        onClick={() => setFilter("dog")}
      >
        <img
          src={filter === "dog" ? dogEffectIcon : dogIcon}
          alt="Dog"
          className="h-6 w-6"
        />
        {filter === "dog" && (
          <span className="text-shadow-lg font-normal text-white drop-shadow-md sm:text-sm md:text-lg">
            หมา
          </span>
        )}
      </button>

      {/* Cat button */}
      <button
        className={`${getButtonClass("cat")} space-x-3 shrink-0`}
        onClick={() => setFilter("cat")}
      >
        <img
          src={filter === "cat" ? catEffectIcon : catIcon}
          alt="Cat"
          className="h-6 w-6 "
        />
        {filter === "cat" && (
          <span className="text-shadow-lg font-normal text-white drop-shadow-xl sm:text-sm md:text-lg">
            แมว
          </span>
        )}
      </button>
    </div>
  );
};

export default Filter;
