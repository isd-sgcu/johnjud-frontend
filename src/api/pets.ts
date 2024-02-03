import { Meta } from "@/types/common";
import { Pet } from "@/types/pets";
import axios from "axios";

interface PetsResponse {
  pets: Pet[];
  meta: Meta;
}

const getPets = async () => {
  const response = await axios.get<PetsResponse>(
    `${import.meta.env.VITE_API_URL}/pets`
  );
  return response.data;
};

type petCreateRequest = Omit<Pet, "id" | "images"> & {
  images: string[]; // image id
};
interface petCreateResponse extends Pet {}

const token: string = "";
const postPetCreate = async (
  data: petCreateRequest
): Promise<petCreateResponse> => {
  const response = await axios.post<petCreateResponse>(
    `${import.meta.env.VITE_API_URL}/pets/create`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export { getPets, postPetCreate };
export type { PetsResponse, petCreateRequest, petCreateResponse };
