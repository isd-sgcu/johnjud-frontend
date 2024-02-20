import adsImage1 from "@/assets/ads/1.jpg";
import adsImage10 from "@/assets/ads/10.jpg";
import adsImage11 from "@/assets/ads/11.jpg";
import adsImage2 from "@/assets/ads/2.jpg";
import adsImage3 from "@/assets/ads/3.jpg";
import adsImage4 from "@/assets/ads/4.jpg";
import adsImage5 from "@/assets/ads/5.jpg";
import adsImage6 from "@/assets/ads/6.jpg";
import adsImage7 from "@/assets/ads/7.jpg";
import adsImage8 from "@/assets/ads/8.jpg";
import adsImage9 from "@/assets/ads/9.jpg";
import { Icon } from "@iconify/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner: React.FC = () => {
  const images = [
    adsImage1,
    adsImage2,
    adsImage3,
    adsImage4,
    adsImage5,
    adsImage6,
    adsImage7,
    adsImage8,
    adsImage9,
    adsImage10,
    adsImage11,
  ];

  return (
    <div className="flex items-center justify-center rounded-2xl bg-accent-light-gray">
      <Carousel
        renderArrowPrev={(clickHandler: () => void) => {
          return (
            <div className="group">
              <button
                className="absolute left-0 top-0 z-10 h-full px-2 outline-none"
                onClick={clickHandler}
              >
                <Icon
                  icon="ph:caret-left"
                  className="h-10 w-10 text-4xl text-white"
                />
              </button>
            </div>
          );
        }}
        renderArrowNext={(clickHandler: () => void) => {
          return (
            <div className="group">
              <button
                className="absolute right-0 top-0 z-10 h-full px-2 outline-none"
                onClick={clickHandler}
              >
                <Icon
                  icon="ph:caret-right"
                  className="h-10 w-10 text-4xl text-white"
                />
              </button>
            </div>
          );
        }}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {images.map((item, index) => (
          <div key={index}>
            <img
              src={item}
              className="z-0 aspect-square rounded-2xl object-cover object-center"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
