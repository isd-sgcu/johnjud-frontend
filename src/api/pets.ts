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

interface DeletePetResponse {
  success: boolean;
}

const getPet = async (id: string): Promise<Pet> => {
  const response = await axios.get<Pet>(
    `${import.meta.env.VITE_API_URL}/pets/${id}`
  );
  return response.data;
};

const getPets = async (filters?: filterState) => {
  const params = convertFiltertoParams(filters);
  const response = await axios.get<PetsResponse>(
    `${import.meta.env.VITE_API_URL}/pets?${params}`
  );
  return response.data;
};

const getPetsAdmin = async (filters?: filterState) => {
  const { accessToken } = useAuthStore.getState();
  const params = convertFiltertoParams(filters);
  const response = await axios.get<PetsResponse>(
    `${import.meta.env.VITE_API_URL}/pets/admin?${params}`,
    {
      headers: {
        "Context-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    }
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

export { deletePet, getPet, getPets, getPetsAdmin, postPet, updatePet, updateVisibility };
export type { PetsResponse, PutPetRequest, postPetRequest };
