import React from "react";
import dogPic from "../../assets/dog.png";
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
    <div className="flex h-auto w-full max-w-xl cursor-pointer flex-col overflow-hidden rounded-3xl bg-white shadow-lg">
      <img src={dogPic} />
      <div className="flex-grow px-6 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-base text-gray-700">Breed: {breed}</p>
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
