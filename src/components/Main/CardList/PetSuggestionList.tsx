import MiniPetCard from "@/components/Card/MiniPetCard";
import PetSuggestionListFallback from "@/components/Fallback/Main/PetSuggestionListFallback";
import { Pet } from "@/types/pets";
import React from "react";
interface PetSuggestionListProps {
  isLoading: boolean;
  data: Pet[] | undefined;
}

const PetSuggestionList: React.FC<PetSuggestionListProps> = ({
  isLoading,
  data,
}) => {
  if (isLoading && !data) {
    return <PetSuggestionListFallback />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-6 lg:justify-end">
      {data?.map((pet: Pet) => (
        <MiniPetCard
          key={pet.id}
          id={pet.id}
          name={pet.name}
          image={pet.images ? pet.images[0].url : undefined}
          habit={pet.habit}
          gender={pet.gender}
          birthdate={pet.birthdate}
        />
      ))}
    </div>
  );
};

export default PetSuggestionList;
