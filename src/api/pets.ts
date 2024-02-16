import { Meta } from "@/types/common";
import { Pet } from "@/types/pets";
import axios from "axios";

interface PetsResponse {
  pets: Pet[];
  metadata: Meta;
}

const getPets = async () => {
  const response = await axios.get<PetsResponse>(
    `${import.meta.env.VITE_API_URL}/pets`
  );
  return response.data;
};

type postPetRequest = Omit<
  Pet,
  "id" | "images" | "is_club_pet" | "address" | "adopt_by" | "contact"
> & {
  origin: string;
  images: string[]; // image id
};
interface postPetResponse extends Pet {}

const postPet = async (
  data: postPetRequest,
  token: string | null
): Promise<postPetResponse> => {
  const response = await axios.post<postPetResponse>(
    `${import.meta.env.VITE_API_URL}/pets`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export { getPets, postPet };
export type { PetsResponse, postPetRequest, postPetResponse };
