import PetCard from "@/components/Card/PetCard/index";
import PetListFallback from "@/components/Fallback/Main/PetListFallback";
import { Pet } from "@/types/pets";
import React from "react";

interface PetListProps {
  isLoading: boolean;
  data: Pet[] | undefined;
}

const PetList: React.FC<PetListProps> = ({ isLoading, data }) => {
  if (isLoading && !data) {
    return <PetListFallback />;
  }

  return (
    <div className="flex space-x-9 overflow-x-auto py-2">
      {data?.map((pet: Pet) => (
        <PetCard
          key={pet.id}
          id={pet.id}
          image={pet.images ? pet.images[0].url : undefined}
          type={pet.type}
          name={pet.name}
          status={pet.status}
          gender={pet.gender}
          birthDate={pet.birthdate}
          habit={pet.habit}
          isSterile={pet.is_sterile}
          isLiked={false}
          isVisibled={pet.is_visible}
        />
      ))}
    </div>
  );
};
export default PetList;
