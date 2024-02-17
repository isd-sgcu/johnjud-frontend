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

type postPetRequest = Omit<Pet, "id" | "images" | "is_club_pet"> & {
  origin: string;
  images: string[]; // image id
};
interface postPetResponse extends Pet {}

const token: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2pvaG5qdWQuaXNkLnNnY3UuaW4udGgiLCJleHAiOjE3MDgwMDk3NDQsImlhdCI6MTcwODAwNjE0NCwidXNlcl9pZCI6ImM0YTI1OTFlLTZjNWEtNDliNS05NDhkLTU0MDJkMjcxNGZlMiIsImF1dGhfc2Vzc2lvbl9pZCI6IjY4NDE2M2FkLWJkYWUtNDlhMS1hNTkyLWRkMjU4NjU0MThkMyJ9.u39pVKLTzl6FKQNDNDhghknxkaf9x3pP_3zD2oE_Fes";
const postPet = async (data: postPetRequest): Promise<postPetResponse> => {
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

//ver.1 omit images
type PutPetRequest = Omit<Pet, "id" | "images" | "is_club_pet" | "pattern" | "status" | "is_visible"> & {
  origin : string,
}

interface PutPetResponse extends Pet {};

const putToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2pvaG5qdWQuaXNkLnNnY3UuaW4udGgiLCJleHAiOjE3MDgxNjk3NjAsImlhdCI6MTcwODE2NjE2MCwidXNlcl9pZCI6ImM0YTI1OTFlLTZjNWEtNDliNS05NDhkLTU0MDJkMjcxNGZlMiIsImF1dGhfc2Vzc2lvbl9pZCI6IjRmN2I2MmMzLWI3NDAtNDJjMC1hMjMzLWQ3NzYzZGFlOTBlMyJ9.4WkYKIyo9jXuzec5jqrH8mJk8L6IHq260HGSbP_hIK0"

const updatePet = async (data : PutPetRequest, id : string) : Promise<PutPetResponse> => {
  const response = await axios.put(`${import.meta.env.VITE_API_URL}/pets/${id}`, data, {
    headers : {
      Authorization: `Bearer ${putToken}`
    }
  });
  return response.data;
}


export { getPets, postPet, updatePet };
export type { PetsResponse, postPetRequest, postPetResponse, PutPetRequest, PutPetResponse };