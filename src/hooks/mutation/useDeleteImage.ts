import { deleteImage } from "@/api/images";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useDeleteImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteImage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pet"] });
    },
    onError: () => {
      toast.error("มีบางอย่างผิดพลาด");
    },
  });
};

export { useDeleteImage };
