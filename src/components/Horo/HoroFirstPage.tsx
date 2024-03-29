import img1 from "@/assets/horo/9-card-for-horo/1.webp";
import img2 from "@/assets/horo/9-card-for-horo/2.webp";
import img3 from "@/assets/horo/9-card-for-horo/3.webp";
import img4 from "@/assets/horo/9-card-for-horo/4.webp";
import img5 from "@/assets/horo/9-card-for-horo/5.webp";
import img6 from "@/assets/horo/9-card-for-horo/6.webp";
import img7 from "@/assets/horo/9-card-for-horo/7.webp";
import img8 from "@/assets/horo/9-card-for-horo/8.webp";
import img9 from "@/assets/horo/9-card-for-horo/9.webp";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../Button";
import Divider from "../Divider";

interface HoroFirstPageProps {
  handleStart: () => void;
}

const HoroFirstPage = ({ handleStart }: HoroFirstPageProps) => {
  const slideImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className=" flex h-full w-full flex-col items-center gap-6 rounded-3xl bg-accent-purple pb-14 pt-8 lg:h-[650px] lg:w-[1024px] lg:gap-3 lg:pb-0">
      <div className="flex flex-col items-center gap-[6px] lg:gap-0">
        <div className="font-bold text-white">ยินดีต้อนรับเข้าสู่</div>
        <div className="text-[40px] font-bold text-white">ดูดวงไพ่ยิปซี</div>
      </div>
      <div className="flex flex-col items-center justify-center lg:hidden">
        <Carousel
          renderArrowPrev={(clickHandler: () => void) => {
            return (
              <button
                className="absolute left-2 top-0 z-10 h-full rounded-l-2xl px-2 outline-none"
                onClick={clickHandler}
              >
                <Icon
                  icon="ph:caret-left"
                  className="h-10 w-10 text-4xl text-white"
                />
              </button>
            );
          }}
          renderArrowNext={(clickHandler: () => void) => {
            return (
              <button
                className="absolute right-2 top-0 z-10 h-full rounded-r-2xl px-2 outline-none"
                onClick={clickHandler}
              >
                <Icon
                  icon="ph:caret-right"
                  className="h-10 w-10 text-4xl text-white"
                />
              </button>
            );
          }}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          className="w-72"
        >
          {slideImages.map((item, index) => (
            <div key={index} className="px-4">
              <img src={item} className="w-48 rounded-2xl" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="hidden flex-col items-center justify-center overflow-visible lg:flex">
        <Carousel
          renderArrowPrev={(clickHandler: () => void) => {
            return (
              <button
                className="absolute -left-9 top-0 z-10 h-full rounded-l-2xl px-2 outline-none"
                onClick={clickHandler}
              >
                <Icon
                  icon="ph:caret-left"
                  className="h-10 w-10 text-4xl text-white"
                />
              </button>
            );
          }}
          renderArrowNext={(clickHandler: () => void) => {
            return (
              <button
                className="absolute -right-9 top-0 z-10 h-full rounded-r-2xl px-2 outline-none"
                onClick={clickHandler}
              >
                <Icon
                  icon="ph:caret-right"
                  className="h-10 w-10 text-4xl text-white"
                />
              </button>
            );
          }}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          className="w-8/12"
          centerMode={true}
          centerSlidePercentage={33.33}
        >
          {slideImages.map((item, index) => (
            <div key={index} className="px-4">
              <img src={item} className="w-48 rounded-2xl" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex flex-row items-center gap-3">
        <div className="h-0.5 w-[72px] rounded-lg bg-accent-yellow"></div>
        <Divider variant={"accent-yellow"}></Divider>
        <div className="h-0.5 w-[72px] rounded-lg bg-accent-yellow"></div>
      </div>
      <Button
        text={"ทำนายดวงของท่าน"}
        variant={"accent-yellow"}
        rounded="2xl"
        className="px-10 py-4 text-xl font-bold text-accent-purple"
        onClick={handleStart}
      />
    </div>
  );
};

export default HoroFirstPage;
