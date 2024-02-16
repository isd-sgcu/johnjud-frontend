import Button from "@/components/Button";
import ResultDisplay from "@/components/Horo/ResultDisplay";
import React, { useEffect, useMemo, useState } from "react";

interface HoroResultProps {
  resultImage: string;
  resultDownloadandShare: string;
  resultName: string;
  resultText: string;
}

const HoroResult: React.FC<HoroResultProps> = ({
  resultImage,
  resultDownloadandShare,
  resultName,
  resultText,
}) => {
  const [phase, setPhase] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (!showResult) {
      intervalId = setInterval(() => {
        setPhase((prevPhase) => (prevPhase + 1) % 3);
      }, 1500);
    }

    return () => clearInterval(intervalId);
  }, [showResult]);

  const handleClick = () => {
    setPhase(0);
    setShowResult(true);
  };

  const imageClass = useMemo(() => {
    return phase === 1 ? "transform scale-x-[-1]" : "";
  }, [phase]);

  const overlayClass = useMemo(() => {
    return phase === 2 ? "absolute inset-0 bg-black bg-opacity-50" : "";
  }, [phase]);

  return (
    <div
      className={`flex ${
        showResult ? "flex-col  md:flex-row md:space-x-16" : "flex-col"
      } items-center justify-center space-y-8`}
    >
      <div className="relative h-[533px] w-80 ">
        <img src={resultImage} alt="ResultImage" className={imageClass} />
        {overlayClass && (
          <div
            className={`${overlayClass} flex flex-col items-center justify-center space-y-4 rounded-[10px] p-4 text-center font-bold text-white`}
          >
            <h2 className="text-3xl">{resultName}</h2>
            <p className="text-base">{resultText}</p>
          </div>
        )}
      </div>
      <Button
        text="ต่อไป"
        variant="accent-yellow"
        rounded="2xl"
        className={`${
          showResult ? "hidden" : "flex"
        } w-8/12 px-20 py-4 text-xl font-bold text-accent-purple shadow-inner md:w-auto`}
        onClick={handleClick}
      />
      {showResult && (
        <ResultDisplay
          resultImage={resultImage}
          resultDownloadandShare={resultDownloadandShare}
          resultName={resultName}
          resultText={resultText}
        />
      )}
    </div>
  );
};

export default HoroResult;
