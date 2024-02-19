import useAuthStore from "@/store/authStore";
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
  images: string[]; // image id
};

const postPet = async (data: postPetRequest): Promise<Pet> => {
  const { accessToken } = useAuthStore.getState();

  const response = await axios.post<Pet>(
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

const updateVisibility = async (
  id: string,
  visibility: boolean
): Promise<Pet> => {
  const { accessToken } = useAuthStore.getState();

  const response = await axios.put<Pet>(
    `${import.meta.env.VITE_API_URL}/pets/${id}`,
    {
      is_visible: visibility,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export { getPets, postPet, updateVisibility };
export type { PetsResponse, postPetRequest };
