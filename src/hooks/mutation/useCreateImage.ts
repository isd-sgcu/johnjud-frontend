import postImage, { postImageRequest, postImageResponse } from "@/api/images";
import { useMutation } from "@tanstack/react-query";

const useCreateImage = (data: postImageRequest) => {
  return useMutation<postImageResponse>({
    mutationFn: () => postImage(data),
  });
};

export { useCreateImage };
