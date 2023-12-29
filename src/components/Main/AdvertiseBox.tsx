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
    <div className="m-0 flex h-full items-center justify-center rounded-3xl bg-johnjud-light-gray overflow-hidden">
      {adSrc && (
        <img
          src={adSrc}
          alt={altText}
          className="max-w-full max-h-full object-contain"
        />
      )}
    </div>
  );
};

export default AdvertiseBox;
