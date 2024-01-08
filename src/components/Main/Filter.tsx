import Button from "@/components/Button";
import { useState } from "react";

const Filter = () => {
  // There are 3 states for filtering in home search (all, dog, cat)
  const [filter, setFilter] = useState<string>("all");

  return (
    <div className="flex space-x-3">
      <Button
        text={"สัตว์เลี้ยงทั้งหมด"}
        variant={filter === "all" ? "primary" : "white"}
        className={`flex items-center justify-center py-3 shadow transition-all duration-500
            ${
              filter === "all"
                ? "flex-row bg-primary px-6 text-white"
                : "flex-col bg-white px-2.5 text-xs text-accent-gray"
            } shrink-0`}
        rounded="2xl"
        onClick={() => setFilter("all")}
      />
      <Button
        text={filter == "cat" ? "แมว" : ""}
        variant={filter === "cat" ? "primary" : "white"}
        icon={filter === "cat" ? "custom:md:cat-green" : "custom:md:cat-gray"}
        className={`flex items-center justify-center space-x-2.5 py-3 shadow transition-all duration-500
            ${filter === "cat" ? "bg-primary px-12" : "bg-white pl-6 pr-4"}
          `}
        rounded="2xl"
        onClick={() => setFilter("cat")}
      />
      <Button
        text={filter == "dog" ? "สุนัข" : ""}
        variant={filter === "dog" ? "primary" : "white"}
        icon={filter === "dog" ? "custom:md:dog-white" : "custom:md:dog-gray"}
        className={`flex items-center justify-center space-x-2.5 py-3 shadow transition-all duration-500 
          ${filter === "dog" ? "bg-primary px-12" : "bg-white pl-6 pr-4"}
          `}
        rounded="2xl"
        onClick={() => setFilter("dog")}
      />
    </div>
  );
};

export default Filter;
