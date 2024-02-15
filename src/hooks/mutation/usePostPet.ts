import { postPet, postPetRequest } from "@/api/pets";
import { useMutation } from "@tanstack/react-query";

const useCreatePet = () => {
  return useMutation({
    mutationFn: (data: postPetRequest) => postPet(data),
  });
};

export { useCreatePet };
