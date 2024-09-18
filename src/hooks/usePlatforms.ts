import APIClient, { FetchResponse } from "../services/APIClient";
import { useQuery } from "@tanstack/react-query";
import {} from "@chakra-ui/react";

//Instantiating axios using our custom APIClient class
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

//Interface for the type of data we would receive from backend
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Custom hook uses react Query to return the data
export default function usePlatforms() {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}
