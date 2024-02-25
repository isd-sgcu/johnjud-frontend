import { PetsResponse, getPetsAdmin } from "@/api/pets";
import { filterState } from "@/types/filter";
import { useQuery } from "@tanstack/react-query";

const usePetsAdminQuery = (filters?: filterState) => {
  return useQuery<PetsResponse>({
    queryKey: ["pets", filters],
    queryFn: () => getPetsAdmin(filters),
    enabled: true,
  });
};

export { usePetsAdminQuery };