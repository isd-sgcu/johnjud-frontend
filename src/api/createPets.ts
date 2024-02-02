import { Pet } from "@/types/pets";
import axios from "axios";

type petCreateRequest = Omit<Pet, "id" | "images"> & {
  images: string[]; // image id
};

interface petCreateResponse extends Pet {}

const postPetCreate = async (
  data: petCreateRequest
): Promise<petCreateResponse> => {
  const response = await axios.post<petCreateResponse>(
    `${import.meta.env.VITE_API_URL}/pets/create`,
    data
  );
  return response.data;
};

export { postPetCreate };
export type { petCreateRequest, petCreateResponse };
