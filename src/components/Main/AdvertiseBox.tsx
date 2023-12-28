import React from "react";

interface AdvertiseBoxProps {
  adSrc: string;
  altText?: string;
}

const AdvertiseBox: React.FC<AdvertiseBoxProps> = ({
  adSrc,
  altText = "Advertisement",
}) => {
  return (
    <div className="flex h-96 w-full items-center justify-center rounded-3xl bg-johnjud-light-gray">
      {adSrc && (
        <img src={adSrc} alt={altText} className="max-h-full max-w-full" />
      )}
    </div>
  );
};

export default AdvertiseBox;
