import React from "react";

interface HoroResultProps {
  resultImg: string;
  resultText: string;
}

const HoroResult: React.FC<HoroResultProps> = ({ resultImg, resultText }) => {
  return (
    <>
      <img src={resultImg} alt="ResultImage" className="w-20 rounded-[10px]" />
      <div className="text-base font-semibold text-black">{resultText}</div>
    </>
  );
};

export default HoroResult;
