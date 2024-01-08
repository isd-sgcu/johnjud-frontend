import React, { useMemo } from "react";

interface PetsHeadingProps {
  onSearch: boolean;
}

const Heading: React.FC<PetsHeadingProps> = ({ onSearch }) => {
  // if we search, display "ค้นหาสัตว์เลี้ยง"
  const displayText = useMemo(() => {
    return onSearch ? "พบสัตว์เลี้ยงทั้งหมด" : "สัตว์เลี้ยงมากกว่า";
  }, [onSearch]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl">{displayText}</p>
      <div className="flex flex-row items-center gap-2">
        <h3 className="text-6xl font-semibold text-primary">4,600</h3>
        <p className="text-2xl">ตัว</p>
      </div>
    </div>
  );
};

export default Heading;
