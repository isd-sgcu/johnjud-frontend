import { PetsResponse, getPets } from "@/api/pets";
import { useQuery } from "@tanstack/react-query";

const usePetsQuery = () => {
  return useQuery<PetsResponse>({
    queryKey: ["pets"],
    queryFn: () => getPets(),
    enabled: true,
  });
};

export { usePetsQuery };
