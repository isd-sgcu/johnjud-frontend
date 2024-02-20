import { GetPetsFilter, PetsResponse, getPets } from "@/api/pets";
import { useQuery } from "@tanstack/react-query";

const usePetsQuery = (filters?: GetPetsFilter) => {
  return useQuery<PetsResponse>({
    queryKey: ["pets", filters],
    queryFn: () => getPets(filters || {}),
    enabled: true,
  });
};

export { usePetsQuery };
