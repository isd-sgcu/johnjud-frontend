import Button from "@/components/Button";
import PetCanvas from "@/components/Pets/PetCanvas";
import React from "react";

interface ResultDisplayProps {
  resultImage: string;
  resultName: string;
  resultText: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  resultImage,
  resultName,
  resultText,
}) => {
  // implement handleshare here
  const handleShare = async () => {
    const canvasElement = document.querySelector("canvas");
    const data = canvasElement?.toDataURL();
    const blob = await (await fetch(data!)).blob();
    const filesArray = [
      new File([blob], `petHoro-${resultName}.png`, {
        type: blob.type,
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData);

    console.log(resultImage);
  };
  // implement handleSave here
  const handleSave = () => {
    const canvas = document.querySelector("canvas");
    const a = document.createElement("a");
    a.setAttribute("download", `petHoro-${resultName}.png`);
    if (canvas) {
      a.setAttribute("href", canvas.toDataURL("image/png"));
    }
    a.click();
    console.log(resultImage);
  };
  return (
    <div className="flex w-72 flex-col items-center space-y-6 text-center">
      <h2 className="text-3xl font-bold text-black">{resultName}</h2>
      <p className="text-xl font-light text-black">{resultText}</p>
      <div className="flex items-center justify-center space-x-3">
        <Button
          text="บันทึกลงเครื่อง"
          variant="accent-purple"
          className="font-white rounded-xl p-2.5 text-xl font-medium"
          icon="ph:download-simple"
          onClick={handleSave}
        />
        <Button
          text="แชร์"
          variant="accent-yellow"
          className="rounded-xl p-2.5 text-xl font-medium text-black"
          icon="ph:share"
          onClick={handleShare}
        />
      </div>
      <PetCanvas
        petImage={resultImage}
        petName={resultName}
        petText={resultText}
      />
    </div>
  );
};

export default ResultDisplay;
