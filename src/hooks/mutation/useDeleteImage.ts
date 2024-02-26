import { deleteImage } from "@/api/images";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteImage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pet"] });
    },
  });
};

export { useDeleteImage };
