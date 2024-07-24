import { PutPetRequest, updatePet } from "@/api/pets";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UpdateMutationParameter {
  body: PutPetRequest;
  id: string;
}

function useUpdatePet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateMutationParameter) => {
      return updatePet(data.body, data.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
  });
}

export { useUpdatePet };
export type { UpdateMutationParameter };
