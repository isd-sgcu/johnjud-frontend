import { Pet } from "@/types/pets";
import axios from "axios";

type CreatePet = Omit<Pet, 'id'> & {
    images: String[]
}

interface CreatePetBody {
    data : CreatePet
}

const useCreatePet = ({data} : CreatePetBody) => {
    return ( 
        axios.post(`${import.meta.env.VITE_API_URL}/pets/create` , data)
    );
}

export default useCreatePet;
export type { CreatePet }
