import { deletePet } from "@/api/pets";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useDeletePet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deletePet(id),
    onSuccess: () => {
      toast.success("ลบสัตว์เลี้ยงสำเร็จ");
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
    onError: () => {
      toast.error("มีบางอย่างผิดพลาด");
    },
  });
};

export { useDeletePet };
