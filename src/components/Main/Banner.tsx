import React from "react";

interface BannerProps {
  adSrc: string;
  altText?: string;
}

const Banner: React.FC<BannerProps> = ({
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

export default Banner;
