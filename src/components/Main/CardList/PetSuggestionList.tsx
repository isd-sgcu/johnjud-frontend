import MiniPetCard from "@/components/Card/MiniPetCard";
import PetSuggestionListFallback from "@/components/Fallback/Main/PetSuggestionListFallback";
import NoPetFound from "@/components/NoPetFound";
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

  if (!data && !isLoading) {
    return <NoPetFound />;
  }
  return (
    <div className="flex flex-wrap justify-center gap-1.5 md:gap-8 md:gap-y-4">
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
