import React from "react";

interface StatCardProps {
  value: number;
}

const StatCard: React.FC<StatCardProps> = ({ value }) => {
  // convert value to formatted string to display commas in number
  const formattedValue = value.toLocaleString();
  return (
    <div className="hidden flex-col space-y-4 md:flex">
      <h2 className="text-3xl">พบสัตว์เลี้ยงทั้งหมด</h2>
      <div className="flex items-end">
        <span className="mr-1 text-6xl font-bold text-primary">
          {formattedValue}
        </span>
        <p className="text-3xl">ตัว</p>
      </div>
    </div>
  );
};

export default StatCard;
