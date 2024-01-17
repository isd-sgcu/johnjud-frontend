import { Pet } from "@/types/pets";
import React from "react";
import MiniPetCard from "@/components/Card/MiniPetCard";
interface MiniPetCardContainerProps {
    petsData : Pet[];
}


const MiniPetCardContainer: React.FC<MiniPetCardContainerProps> = ({ petsData }) => {
  
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6">
      {petsData?.map((pet: Pet) => (
        <MiniPetCard
          key={pet.id}
          id={pet.id}
          name = {pet.name}
          species={pet.type}
          gender={pet.gender}
          birthdate={pet.birthdate}
          />  
      ))}
    </div>
  );
};

export default MiniPetCardContainer;
