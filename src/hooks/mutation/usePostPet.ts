import { postPet, postPetRequest } from "@/api/pets";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreatePet = () => {
  return useMutation({
    mutationFn: (data: postPetRequest) => postPet(data),
    onSuccess: () => {
      toast.success("เพิ่มสัตว์เลี้ยงสำเร็จ");
    },
    onError: () => {
      toast.error("มีบางอย่างผิดพลาด");
    },
  });
};

export { useCreatePet };
