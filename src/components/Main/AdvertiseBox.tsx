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
    <div className="m-0 flex h-full items-center justify-center overflow-hidden rounded-3xl bg-johnjud-light-gray">
      {adSrc && (
        <img src={adSrc} alt={altText} className="h-full w-full object-fill" />
      )}
    </div>
  );
};

export default AdvertiseBox;
