import { Pet } from "@/types/pets";
import axios from "axios";

type petUpdateRequest = Omit<Pet, "id" | "images"> & {
  images: string[]; // image id
};

interface petUpdateResponse extends Pet {}

const putPetUpdate = async (
  data: petUpdateRequest,
  id: string
): Promise<petUpdateResponse> => {
  const response = await axios.post<petUpdateResponse>(
    `${import.meta.env.VITE_API_URL}/pets/${id}`,
    data
  );
  return response.data;
};

export { putPetUpdate };
export type { petUpdateRequest, petUpdateResponse };