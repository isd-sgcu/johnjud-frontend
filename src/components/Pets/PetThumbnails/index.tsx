import PetBadge from "@/components/Admin/Pets/Add/PetBadge";
import ThumbnailFallback from "@/components/Fallback/Pet/ThumbnailFallback";
import { Icon } from "@iconify/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface PetThumbnailsProps {
  isLoading: boolean;
  petImages: string[];
  origin: string;
}

const PetThumbnails = ({
  isLoading,
  petImages,
  origin,
}: PetThumbnailsProps) => {
  if (isLoading && !petImages) {
    return <ThumbnailFallback />;
  }

  return (
    <div className="relative aspect-square min-w-40 rounded-[20px] sm:min-w-80">
      <div className="absolute -top-1 right-4 z-10">
        {/* Recieved where they're from */}
        <PetBadge value={origin} setValue={() => {}} isEditabled={false} />
      </div>
      <div className="z-80 relative max-h-80 max-w-80 rounded-2xl">
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
          {petImages &&
            Array.from(petImages).map((item, index) => (
              <div key={index}>
                <img
                  src={item}
                  className="z-0 aspect-square max-w-80 rounded-2xl object-cover object-center"
                />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PetThumbnails;
