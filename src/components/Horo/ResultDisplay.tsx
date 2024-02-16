import Button from "@/components/Button";
import { download } from "@/utils/download";
import { share } from "@/utils/share";
import React from "react";

interface ResultDisplayProps {
  resultImage: string;
  resultDownloadandShare: string;
  resultName: string;
  resultText: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  resultImage,
  resultDownloadandShare,
  resultName,
  resultText,
}) => {
  // implement handleshare here
  const handleShare = () => {
    share(resultImage, resultName);
  };
  // implement handleSave here
  const handleSave = () => {
    download(resultDownloadandShare, resultName);
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
    </div>
  );
};

export default ResultDisplay;
