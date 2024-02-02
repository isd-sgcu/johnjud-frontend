import { petCreateRequest, postPetCreate } from "@/api/createPets";
import { useMutation } from "@tanstack/react-query";

const useCreatePet = () => {
  return useMutation({
    mutationFn: (data: petCreateRequest) => postPetCreate(data),
  });
};

export { useCreatePet };
