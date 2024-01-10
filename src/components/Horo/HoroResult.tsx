import React, { useEffect, useState, useCallback } from "react";
import Button from "@/components/Button";

interface HoroResultProps {
  resultImage: string;
  resultText: string;
}

const HoroResult: React.FC<HoroResultProps> = ({ resultImage, resultText }) => {
  /*  
      state for image result
        - phase 0 = image
        - phase 1 = image flipped
        - phase 2 = text in the image
    */
  const [phase, setPhase] = useState(0);
  
  const updatePhase = (currentPhase: number) => {
    setTimeout(() => {
      const nextPhase = (currentPhase + 1) % 3;
      setPhase(nextPhase);
      console.log(nextPhase);
      updatePhase(nextPhase); 
    }, 2000);
  };
  

  useEffect(() => {
    updatePhase(phase);
  }, []);
  
  
  

  const imageContainerClass = "relative w-80 h-[533px]";
  let imageClass = "";
  const overlayClass =
    "absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center p-4 rounded-[10px] flex-col space-y-4";
  const textClass = "text-white text-xl font-bold";

  if (phase === 1) {
    imageClass += " transform scale-x-[-1]";
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className={imageContainerClass}>
        <img src={resultImage} alt="ResultImage" className={imageClass} />
        {phase === 2 && (
          <>
            <div className={overlayClass}></div>
            <div className={`${overlayClass} ${textClass}`}>
              <h2 className="text-3xl">ผลการทำนาย</h2>
              <p className="text-base">{resultText}</p>
            </div>
          </>
        )}
      </div>
      <Button
        text="ต่อไป"
        variant="accent-yellow"
        rounded="2xl"
        className="w-full px-[84px] py-[15px] text-xl font-bold text-accent-purple shadow-inner md:w-auto"
      />
    </div>
  );
};

export default HoroResult;
