import DetailFallback from "./Pet/DetailFallback";
import ThumbnailFallback from "./Pet/ThumbnailFallback";

const PetPageFallback = () => {
  return (
    <div className="animate-pulse">
      <ThumbnailFallback />
      <DetailFallback />
    </div>
  );
};

export default PetPageFallback;
