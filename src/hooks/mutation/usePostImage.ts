import { postImage, postImageRequest } from "@/api/images";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: postImageRequest) => postImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pet"] });
    },
    onError() {
      toast.error("มีบางอย่างผิดพลาด");
    },
  });
};

export { useCreateImage };
