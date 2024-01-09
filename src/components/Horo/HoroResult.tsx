import React from "react";
import Button from "../Button";
import { useState, useEffect } from "react";

interface HoroResultProps {
  resultImage: string;
  resultText: string;
}


const HoroResult: React.FC<HoroResultProps> = ({ resultImage, resultText }) => {
    /*
        - phase 0 = image
        - phase 1 = image flipped
        - phase 2 = text in the image
    */
    const [phase, setPhase] = useState(0);
    

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setPhase(1);
            const timer2 = setTimeout(() => {
                setPhase(2);
            }, 1000);
            return () => clearTimeout(timer2);
        }, 1000);
        return () => clearTimeout(timer1);
    }, []);

    let imageContainerClass = "relative w-80 h-[533px]";
    let imageClass = "h-[533px] w-80 rounded-[10px]";
    let overlayClass = "absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center p-4";
    let textClass = "text-white text-xl font-bold"; 

    if (phase === 1) {
        imageClass += " transform scale-x-[-1]";
    }

    return (
        <div className="flex flex-col justify-center items-center space-y-8">
            <div className={imageContainerClass}>
                <img src={resultImage} alt="ResultImage" className={imageClass} />
                {phase === 2 && (
                    <>
                        <div className={overlayClass}></div>
                        <div className={`${overlayClass} ${textClass}`}>
                            <p>{resultText}</p>
                        </div>
                    </>
                )}
            </div>
            <Button
                text="ต่อไป"
                variant="accent-yellow"
                rounded="2xl"
                className="text-xl shadow-inner text-accent-purple font-bold px-[84px] py-[15px] w-full md:w-auto"
            />
        </div>
    );
};

export default HoroResult;
