import { Pet } from "@/types/pets";
import axios from "axios";

const useUpdatePet = async (id: string, petInfo: Pet) => {
  return axios.put<Pet>(
    `${import.meta.env.VITE_API_URL}/v1/pets/${id}`,
    petInfo
  );
};

export { useUpdatePet };
