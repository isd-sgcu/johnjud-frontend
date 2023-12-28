import React from "react";
import dogIcon from "../../assets/dog.png";
interface MockSmallPetCardProps {
  name: string;
  breed: string;
  age: number;
}

const MockSmallPetCard: React.FC<MockSmallPetCardProps> = ({
  name,
  breed,
  age,
}) => {
  return (
    <div className="flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-3xl bg-white shadow-lg">
      <div className="rounded-md">
        <img src={dogIcon} className="h-20 w-full object-cover" />
      </div>
      <div className="flex-grow px-6 py-4">
        <div className="text-xl font-bold">{name}</div>
        <p className="text-sm text-gray-700">พันธ์: {breed}</p>
      </div>
      <div className="px-6 pb-2 pt-4">
        <span className="inline-block rounded-full bg-blue-200 px-3 py-1 text-xs font-semibold text-gray-700">
          {age} Year Old
        </span>
      </div>
    </div>
  );
};

export default MockSmallPetCard;
