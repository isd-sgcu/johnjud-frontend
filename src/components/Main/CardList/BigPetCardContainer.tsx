import PetCard from "@/components/Card/PetCard/index";
import { Pet } from "@/types/pets";
import React from "react";

interface BigPetCardContainerProps {
  petsData: Pet[];
}

const BigPetCardContainer: React.FC<BigPetCardContainerProps> = ({
  petsData,
}) => {
  return (
    <div className="flex space-x-9 overflow-x-auto">
      {petsData.map((pet: Pet) => (
        <PetCard
          key={pet.id}
          id={pet.id}
          image="https://f.ptcdn.info/251/076/000/r6phkmmxuGNF1erTdMG-o.jpg"
          type={pet.type}
          name={pet.name}
          status={pet.status}
          gender={pet.gender}
          birthDate={pet.birthdate}
          habit={pet.habit}
          isSterile={pet.is_sterile}
          isLiked={false}
          isVisibled={pet.is_visible}
          role="user"
        />
      ))}
    </div>
  );
};
export default BigPetCardContainer;
