import MiniPetCardFallback from "../Card/MiniPetCardFallback";

const PetSuggestionListFallback = () => {
  return (
    <div className="flex animate-pulse flex-wrap justify-center gap-2 md:gap-6 lg:justify-end">
      <MiniPetCardFallback />
      <MiniPetCardFallback />
      <MiniPetCardFallback />
      <MiniPetCardFallback />
      <MiniPetCardFallback />
      <MiniPetCardFallback />
      <MiniPetCardFallback />
      <MiniPetCardFallback />
    </div>
  );
};

export default PetSuggestionListFallback;
