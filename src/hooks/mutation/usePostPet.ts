import { postPet, postPetRequest } from "@/api/pets";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useCreatePet = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: postPetRequest) => postPet(data),
    onSuccess: () => {
      toast.success("เพิ่มสัตว์เลี้ยงสำเร็จ");
      setTimeout(() => {
        navigate("/admin/pets");
      }, 1500);
    },
    onError: () => {
      toast.error("มีบางอย่างผิดพลาด");
    },
  });
};

export { useCreatePet };
