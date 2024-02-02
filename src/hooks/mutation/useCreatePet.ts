import { petCreateRequest, postPetCreate } from "@/api/createPets";
import { postImageResponse } from "@/api/images";
import { useMutation } from "@tanstack/react-query";


const useCreatePet = (data : petCreateRequest) => {
    return useMutation<postImageResponse>({
        mutationFn: () => postPetCreate(data)
    })
}

export default useCreatePet;
