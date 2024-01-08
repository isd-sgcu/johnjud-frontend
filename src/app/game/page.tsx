import Button from "@/components/Button";
import GameLayout from "@/layouts/GameLayout";
import { Icon } from "@iconify/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/user-tarot/I.png";
import img2 from "../../assets/user-tarot/II.png";
import img3 from "../../assets/user-tarot/III.png";
import img4 from "../../assets/user-tarot/IV.png";
import img9 from "../../assets/user-tarot/IX.png";
import img5 from "../../assets/user-tarot/V.png";
import img6 from "../../assets/user-tarot/VI.png";
import img7 from "../../assets/user-tarot/VII.png";
import img8 from "../../assets/user-tarot/VIII.png";
import img10 from "../../assets/user-tarot/X.png";

const userTarotFirstpage = () => {
  const slideImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  return (
    <div className="w-full bg-primary-variant">
      <div className="flex flex-col items-center p-6 lg:mx-auto lg:w-80 lg:px-0 lg:py-10">
        <div className="relative w-full">
          <Carousel
            renderArrowPrev={(clickHandler: () => void) => {
              return (
                <div className="group">
                  <div className="absolute left-0 top-0 z-10 h-full w-14 rounded-l-2xl bg-gradient-to-r from-black to-transparent opacity-20 group-hover:opacity-50"></div>
                  <button
                    className="absolute left-0 top-0 z-10 h-full rounded-l-2xl px-2"
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
                  <div className="absolute right-0 top-0 z-10 h-full w-14 rounded-r-2xl bg-gradient-to-r from-transparent to-black opacity-20 group-hover:opacity-50"></div>
                  <button
                    className="absolute right-0 top-0 z-10 h-full rounded-r-2xl px-2"
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
            {slideImages.map((item, index) => (
              <div key={index}>
                <img src={item} className="w-full rounded-2xl" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="my-6 flex flex-col items-center lg:my-8">
          <div
            className="py-3 text-5xl font-bold text-primary
                    lg:py-2 lg:text-4xl"
          >
            เกมทายนิสัย
          </div>
          <div
            className="text-base font-bold text-white
                    lg:py-1 lg:text-xl"
          >
            มาหาสัตว์เลี้ยงที่เหมาะกับคุณกัน!
          </div>
        </div>
        <Button
          text="เล่นเลย"
          variant="accent-red"
          rounded="2xl"
          className="w-full text-xl font-semibold"
        />
      </div>
    </div>
  );
};

export default userTarotFirstpage;

export const Layout = GameLayout;
