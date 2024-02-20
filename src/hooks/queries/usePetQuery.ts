import { getPet } from "@/api/pets";
import { Pet } from "@/types/pets";
import { useQuery } from "@tanstack/react-query";

const usePetQuery = (id: string) => {
  return useQuery<Pet>({
    queryKey: ["pet", id],
    queryFn: () => getPet(id),
    enabled: true,
  });
};

export { usePetQuery };
