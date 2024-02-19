import { postImage, postImageRequest } from "@/api/images";
import { useMutation } from "@tanstack/react-query";

const useCreateImage = () => {
  return useMutation({
    mutationFn: (data: postImageRequest) => postImage(data),
  });
};

export { useCreateImage };
