import PetCardFallback from "../Card/PetCardFallback";

const PetListFallback = () => {
  return (
    <div className="flex animate-pulse space-x-9 overflow-x-auto py-2">
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

export default PetListFallback;
