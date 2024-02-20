import { PetsResponse, getPets } from "@/api/pets";
import { filterState } from "@/types/filter";
import { useQuery } from "@tanstack/react-query";

const usePetsQuery = (filters?: filterState) => {
  return useQuery<PetsResponse>({
    queryKey: ["pets", filters],
    queryFn: () => getPets(filters),
    enabled: true,
  });
};

export { usePetsQuery };
