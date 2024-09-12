import useData, { FetchResponse } from "./useData";
import { Genre } from "./useGenres";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import {} from "@chakra-ui/react";
import apiClient from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default function usePlatoforms() {
  const endpoint = "/platforms/lists/parents";

  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>(endpoint).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}
