import React from "react";

interface BannerProps {
  imageUrl: string;
  altText?: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, altText = "Banner" }) => {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-accent-light-gray">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={altText}
          className="aspect-square h-full w-full rounded-2xl object-cover object-center"
        />
      )}
    </div>
  );
};

export default Banner;
