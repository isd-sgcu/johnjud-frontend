import useStore from "@/store/favStore";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import PetCard from "./PetCard";

const fetchPets = async () => {
  const response = await axios.get("/api/pets");
  return response.data;
};

const PetList: React.FC = () => {
  const { data: pets } = useQuery("pets", fetchPets);

  return (
    <div>
      {pets &&
        pets.map((pet) => (
          <PetCard
            key={pet.id}
            {...pet}
            isLiked={useStore.getState().favorites.includes(pet.id)}
          />
        ))}
    </div>
  );
};

export default PetList;
