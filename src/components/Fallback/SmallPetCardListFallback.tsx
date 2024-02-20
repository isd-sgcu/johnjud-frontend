import SmallPetCardFallback from "./Card/SmallPetCardFallback";

const SmallPetCardListFallback = () => {
  return (
    <div className="overflow-x-auto bg-primary/50 px-10 py-6">
      <div className="flex animate-pulse space-x-6 ">
        <SmallPetCardFallback />
        <SmallPetCardFallback />
        <SmallPetCardFallback />
        <SmallPetCardFallback />
        <SmallPetCardFallback />
        <SmallPetCardFallback />
        <SmallPetCardFallback />
        <SmallPetCardFallback />
      </div>
    </div>
  );
};

export default SmallPetCardListFallback;
