import React from "react";

interface AdvertiseBoxProps {
  adSrc: string;
  altText?: string;
}

const AdBanner: React.FC<AdvertiseBoxProps> = ({
  adSrc,
  altText = "Advertisement",
}) => {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-accent-light-gray">
      {adSrc && (
        <img src={adSrc} alt={altText} className="h-full w-full object-fill" />
      )}
    </div>
  );
};

export default AdBanner;
