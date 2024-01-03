import mockPetData from "../../../mock/mockPetData";
import MiniPetCard from "../../card/MiniPetCard";

const MiniPetCardContainer = () => {
  const pets = mockPetData.slice(0,8);
  return (
    <div className="grid grid-cols-2 gap-x-1 gap-y-2 md:gap-6 md:grid-cols-4">
      {pets.map((pet, index) => (
        <MiniPetCard
          key={index}
          name={pet.name}
          gender={pet.gender}
          species={pet.species}
          birthdate={pet.birthdate}
        />
      ))}
    </div>
  );
};

export default MiniPetCardContainer;
