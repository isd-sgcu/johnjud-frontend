import { deleteImage } from "@/api/images";
import { useMutation } from "@tanstack/react-query";

const useDeleteImage = () => {
  return useMutation({
    mutationFn: (id: string) => deleteImage(id),
  });
};

export { useDeleteImage };
