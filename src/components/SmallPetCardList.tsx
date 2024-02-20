import SmallPetCard from "@/components/Card/SmallPetCard";
import { Pet } from "@/types/pets";
import SmallPetCardListFallback from "./Fallback/SmallPetCardListFallback";

const SmallPetCardList = ({
  pets,
  isLoading,
}: {
  pets: Pet[] | undefined;
  isLoading: boolean;
}) => {
  if (isLoading && !pets) {
    return <SmallPetCardListFallback />;
  }

  return (
    <div className="bg-primary/50">
      <div className="mx-auto flex max-w-[1536px]  space-x-6 overflow-x-auto  px-10 py-6">
        {pets?.map((pet: Pet) => (
          <SmallPetCard
            key={pet.id}
            id={pet.id}
            name={pet.name}
            image={pet.images ? pet.images[0].url : undefined}
            gender={pet.gender}
            birthdate={pet.birthdate}
            status={pet.status}
          />
        ))}
      </div>
    </div>
  );
};

export default SmallPetCardList;
