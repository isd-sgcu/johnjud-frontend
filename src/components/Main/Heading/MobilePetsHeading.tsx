import React from "react";

interface StatCardProps {
  value: number;
}

const MobilePetsHeading: React.FC<StatCardProps> = ({ value }) => {
  // convert value to formatted string to display commas in number
  const formattedValue = value.toLocaleString();
  return (
    <div className="flex flex-col items-center justify-center md:hidden">
      <h2>พบสัตว์เลี้ยงทั้งหมด</h2>
      <div className="flex items-center justify-center space-x-0.5">
        <span className=" text-primary font-bold">
          {formattedValue}
        </span>
        <p>ตัว</p>
      </div>  
    </div>
  );
};

export default MobilePetsHeading;
