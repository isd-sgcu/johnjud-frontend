import { Pet } from "@/types/pets";
import axios from "axios";

const getPet = async (id: string): Promise<Pet> => {
  const response = await axios.get<Pet>(
    `${import.meta.env.VITE_API_URL}/pets/${id}`
  );
  return response.data;
};

export { getPet };
