import { postImage, postImageRequest } from "@/api/images";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: postImageRequest) => postImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pet"] });
    },
  });
};

export { useCreateImage };
