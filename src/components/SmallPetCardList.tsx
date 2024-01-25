import SmallPetCard from "@/components/Card/SmallPetCard";
import { Pet } from "@/types/pets";

const SmallPetCardList = ({ pets }: { pets: Pet[] }) => {
  return (
    <div className="flex space-x-6 overflow-x-auto bg-primary/50 px-10 py-6">
      {pets.map((pet: Pet) => (
        <SmallPetCard
          key={pet.id}
          id={pet.id}
          name={pet.name}
          image={pet.images[0].url}
          gender={pet.gender}
          birthdate={pet.birthdate}
          status={pet.status}
        />
      ))}
    </div>
  );
};

export default SmallPetCardList;
