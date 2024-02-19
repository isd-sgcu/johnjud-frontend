import {updateVisibility} from "@/api/pets";
import { useMutation } from "@tanstack/react-query";

const useUpdateVisibility = () => {
    return useMutation({
        mutationFn: ({ id, visibility }: { id: string, visibility: boolean }) => updateVisibility(id, visibility)
    });
}

export { useUpdateVisibility };