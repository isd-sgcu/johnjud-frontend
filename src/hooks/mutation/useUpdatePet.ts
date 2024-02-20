import { PutPetRequest, updatePet } from "@/api/pets";
import { useMutation } from "@tanstack/react-query";

interface UpdateMutationParameter {
  body: PutPetRequest;
  id: string;
}

function useUpdatePet() {
  return useMutation({
    mutationFn: (data: UpdateMutationParameter) => {
      return updatePet(data.body, data.id);
    },
  });
}

export { useUpdatePet };
export type { UpdateMutationParameter };
