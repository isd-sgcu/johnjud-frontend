import useAuthStore from "@/store/authStore";
import { Meta } from "@/types/common";
import { Pet } from "@/types/pets";
import axios from "axios";

interface PetsResponse {
  pets: Pet[];
  metadata: Meta;
}

interface DeletePetResponse {
  success: boolean;
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

const deletePet = async (id: string) => {
  const { accessToken } = useAuthStore.getState();

  const response = await axios.delete<DeletePetResponse>(
    `${import.meta.env.VITE_API_URL}/pets/${id}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

//ver.1 omit images
type PutPetRequest = Omit<
  Pet,
  | "id"
  | "images"
  | "is_club_pet"
  | "pattern"
  | "status"
  | "address"
  | "adopt_by"
  | "contact"
> & {
  origin: string;
  images: string[];
};

const updatePet = async (data: PutPetRequest, id: string): Promise<Pet> => {
  const { accessToken } = useAuthStore.getState();

  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/pets/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export { deletePet, getPets, postPet, updatePet, updateVisibility };
export type { PetsResponse, PutPetRequest, postPetRequest };
