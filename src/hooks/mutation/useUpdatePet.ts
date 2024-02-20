import { PutPetRequest, updatePet } from "@/api/pets";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface UpdateMutationParameter {
  body: PutPetRequest;
  id: string;
}

function useUpdatePet() {
  return useMutation({
    mutationFn: (data: UpdateMutationParameter) => {
      return updatePet(data.body, data.id);
    },
    onSuccess: () => {
      toast.success("เเก้ไขข้อมูลสัตว์เลี้ยงสำเร็จ");
    },
    onError: () => {
      toast.error("มีบางอย่างผิดพลาด");
    },
  });
}

export { useUpdatePet };
export type { UpdateMutationParameter };
