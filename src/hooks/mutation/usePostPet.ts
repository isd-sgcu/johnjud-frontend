import { postPet, postPetRequest } from "@/api/pets";
import { useMutation } from "@tanstack/react-query";

const useCreatePet = (token: string | null) => {
  return useMutation({
    mutationFn: (data: postPetRequest) => postPet(data, token),
  });
};

export { useCreatePet };
