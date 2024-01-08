import { Icon } from "@iconify/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
// import backcard from "../../assets/user-tarot/backcard.png"

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <li

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
    <div className="min-h-screen w-full bg-primary-variant">
      <div className="flex flex-col items-center p-6 lg:mx-auto lg:w-80 lg:px-0 lg:py-10">
        {/* <img className="h-[428px] w-80 rounded-2xl" src={img1} /> */}
        <div className="relative">
          <Carousel
            renderArrowPrev={(clickHandler: () => void) => {
              return (
                <button
                  className="absolute z-10 h-full bg-red-100"
                  onClick={clickHandler}
                >
                  <Icon
                    icon="ph:caret-circle-left-bold
                    "
                    className="h-6 w-6 text-black"
                  />
                </button>
              );
            }}
            infiniteLoop={true}
            autoPlay={true}
            thumbWidth={40}
          >
            {slideImages.map((item, index) => (
              <div key={index}>
                <img src={item} className="rounded-3xl" />
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
        <button
          className="bg-secondary w-full rounded-2xl px-6 py-2
                text-center text-xl font-semibold text-white"
        >
          เล่นเลย
        </button>
      </div>
      {/* <div className="w-90 py-6 flex flex-col items-center lg:py-10">
                <img className="w-full h-[428px] rounded-2xl"
                    src={catImage} />
                <div className="flex flex-col items-center font-bold my-6 lg:my-8">
                    <div className="text-primary text-5xl py-3 lg:text-4xl lg:py-4">เกมทายนิสัย</div>
                    <div className="text-white text-base lg:text-xl lg:py-1">มาหาสัตว์เลี้ยงที่เหมาะกับคุณกัน!</div>
                </div>
                <button className="text-white text-xl font-semibold text-center w-full bg-secondary px-6 py-2 rounded-2xl">เล่นเลย</button>
            </div > */}
    </div>
  );
};

// min-h-screen w-full shrink-0 -> biggest div
// self-stretch mx-6 lg:w-80 lg:mx-auto -> btn

export default userTarotFirstpage;
