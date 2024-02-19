import { updateVisibility } from "@/api/pets";
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast'

const useUpdateVisibility = () => {
  return useMutation({
    mutationFn: ({ id, visibility }: { id: string; visibility: boolean }) =>
      updateVisibility(id, visibility),
    onSuccess: () => {
      toast.success("เปลี่ยนการมองเห็นสำเร็จ")
    },
    onError: () => {
      toast.error("มีบางอย่างผิดพลาด")
    }
  });
};

export { useUpdateVisibility };
