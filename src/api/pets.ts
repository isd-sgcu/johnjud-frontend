import useAuthStore from "@/store/authStore";
import { Meta } from "@/types/common";
import { filterState } from "@/types/filter";
import { Pet } from "@/types/pets";
import { convertFiltertoParams } from "@/utils/convertFiltertoParams";
import axios from "axios";

interface PetsResponse {
  pets: Pet[];
  metadata: Meta;
}

const getPets = async (filters?: filterState) => {
  const params = convertFiltertoParams(filters);
  const response = await axios.get<PetsResponse>(
    `${import.meta.env.VITE_API_URL}/pets?${params}`
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

const postPet = async (data: postPetRequest): Promise<postPetResponse> => {
  const { accessToken } = useAuthStore.getState();

  const response = await axios.post<postPetResponse>(
    `${import.meta.env.VITE_API_URL}/pets`,
    data,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export { getPets, postPet };
export type { PetsResponse, postPetRequest, postPetResponse };
