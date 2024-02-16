import { postImage, postImageRequest } from "@/api/images";
import { useMutation } from "@tanstack/react-query";

const useCreateImage = (token: string | null) => {
  return useMutation({
    mutationFn: (data: postImageRequest) => postImage(data, token),
  });
};

export { useCreateImage };
