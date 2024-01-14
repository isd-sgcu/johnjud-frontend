import img1 from "@/assets/horo/9-card-for-horo/1.png";
import img2 from "@/assets/horo/9-card-for-horo/2.png";
import img3 from "@/assets/horo/9-card-for-horo/3.png";
import img4 from "@/assets/horo/9-card-for-horo/4.png";
import img5 from "@/assets/horo/9-card-for-horo/5.png";
import img6 from "@/assets/horo/9-card-for-horo/6.png";
import img7 from "@/assets/horo/9-card-for-horo/7.png";
import img8 from "@/assets/horo/9-card-for-horo/8.png";
import img9 from "@/assets/horo/9-card-for-horo/9.png";
import HoroResult from "@/components/Horo/HoroResult";
import SelectCard from "@/components/Horo/SelectCard";
import HoroDatas from "@/utils/horo";
import { useCallback, useMemo, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../Button";
import Container from "../Container";
import Divider from "../Divider";
import HoroBgContainer from "./HoroBgContainer";

const HoroGame = () => {
  const [phase, setPhase] = useState(0);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cardList = useMemo(() => HoroDatas.map((data) => data.img), []);
  const titleList = useMemo(() => HoroDatas.map((data) => data.title), []);
  const textList = useMemo(() => HoroDatas.map((data) => data.content), []);

  const handleClick = useCallback(() => {
    const randomCard: number = Math.floor(Math.random() * cardList.length);
    setSelectedCard(randomCard);
    setPhase(2);
  }, [cardList.length]);

  const slideImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const renderPhase = () => {
    switch (phase) {
      case 0:
        return (
          <Container>
            {/* className="flex h-[664px] w-80 flex-col items-center justify-center rounded-3xl bg-accent-purple" */}
            <HoroBgContainer>
              <div className="flex flex-col items-center gap-[6px]">
                <div className="font-bold text-white">ยินดีต้อนรับเข้าสู่</div>
                <div className="text-[40px] font-bold text-white">
                  ดูดวงไพ่ยิปซี
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="h-0.5 w-[72px] rounded-lg bg-accent-yellow"></div>
                <Divider variant={"accent-yellow"}></Divider>
                <div className="h-0.5 w-[72px] rounded-lg bg-accent-yellow"></div>
              </div>
              <div>
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  showIndicators={true}
                >
                  {slideImages.map((item, index) => (
                    <div key={index}>
                      <img src={item} className="w-[200px] rounded-2xl" />
                    </div>
                  ))}
                </Carousel>
              </div>
              <Button
                text={"ทำนายดวงของท่าน"}
                variant={"accent-yellow"}
                rounded="2xl"
                className="px-10 py-4 text-xl font-bold text-accent-purple"
                onClick={() => setPhase(1)}
              />
            </HoroBgContainer>
          </Container>
        );
      case 1:
        return (
          <HoroBgContainer>
            <SelectCard
              selectedCard={selectedCard}
              handleClick={handleClick}
              cardList={cardList}
            />
          </HoroBgContainer>
        );
      case 2:
        return (
          selectedCard !== null && (
            <HoroResult
              resultImage={cardList[selectedCard]}
              resultName={titleList[selectedCard]}
              resultText={textList[selectedCard]}
            />
          )
        );
      default:
        return null;
    }
  };

  return <>{renderPhase()}</>;
};

export default HoroGame;
