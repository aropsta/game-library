import APIClient, { FetchResponse } from "../services/APIClient";
import { useQuery } from "@tanstack/react-query";
import {} from "@chakra-ui/react";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default function usePlatoforms() {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}
