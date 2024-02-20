import PetCardFallback from "./Card/PetCardFallback";

const PetsPageFallback = () => {
  return (
    <div className="flex animate-pulse flex-wrap items-center justify-center gap-6 lg:gap-9">
      <PetCardFallback />
      <PetCardFallback />
      <PetCardFallback />
      <PetCardFallback />
      <PetCardFallback />
      <PetCardFallback />
      <PetCardFallback />
      <PetCardFallback />
      <PetCardFallback />
    </div>
  );
};

export default PetsPageFallback;
