import React, { useEffect, useState } from "react";
import Button from "@/components/Button";

interface HoroResultProps {
  resultImage: string;
  resultName: string;
  resultText: string; 
}

const HoroResult: React.FC<HoroResultProps> = ({ resultImage, resultName,  resultText }) => {
  /*  
      state for image result
        - phase 0 = image
        - phase 1 = image flipped
        - phase 2 = text in the image
  */
  const [phase, setPhase] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  // for swapping between phase
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!showResult) {
      const updatePhase = (currentPhase: number): void => {
        timer = setTimeout(() => {
          const nextPhase = (currentPhase + 1) % 3;
          setPhase(nextPhase);
          updatePhase(nextPhase);
        }, 1500);
      };
      updatePhase(phase);
    }
    return () => clearTimeout(timer);
  }, [showResult, phase]); 

  // when we click the phase back to 0 and show the result below
  const handleClick = () => {
    setPhase(0);
    setShowResult(true);
  };
  
  const imageContainerClass = "relative w-80 h-[533px]";
  const overlayClass = 
  "absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center p-4 rounded-[10px] flex-col space-y-4";
  
  let imageClass = "";
  if (phase === 1) {
      imageClass += " transform scale-x-[-1]";
  }

  return (
    <div className={`flex ${showResult ? "md:space-x-8 flex-col md:flex-row" : "flex-col"} items-center justify-center space-y-8`}>
      <div className={imageContainerClass}>
        <img src={resultImage} alt="ResultImage" className={imageClass} />
        {phase === 2 && ( 
          <>
            <div className={overlayClass}></div>
            <div className={`${overlayClass} text-white font-bold `}>
              <h2 className="text-3xl">{resultName}</h2>
              <p className="text-base">{resultText}</p>
            </div>
          </>
        )}
      </div>
      <Button
        text="ต่อไป"
        variant="accent-yellow"
        rounded="2xl"
        className={`${showResult ?  "hidden" : "flex"}  justify-center items-center w-8/12 px-[84px] py-[15px] text-xl font-bold text-accent-purple shadow-inner md:w-auto`}
        onClick={handleClick}
      />
      {showResult && (
      <div className="flex flex-col space-y-6 items-center text-center w-[290px]">
          <h2 className="text-3xl font-bold text-black">{resultName}</h2>
          <p className="font-light text-xl text-black">{resultText}</p>
          <div className="flex justify-center items-center space-x-3">
              <Button
                text="บันทึกลงเครื่อง"
                variant="accent-purple"
                className="text-xl font-white font-medium p-2.5 rounded-xl"
                icon="ph:download-simple"
              />
              <Button
                text="แชร์"
                variant="accent-yellow"
                className="text-xl text-black font-medium p-2.5 rounded-xl"
                icon="ph:share"
              />
          </div>
      </div>
      )}
    </div>
  );
};

export default HoroResult;
