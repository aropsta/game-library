import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import {} from "@chakra-ui/react";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

export default function useGenres() {
  // const queryClient = useQueryClient();

  // const requestConfig = {
  //   params: {
  //     genres: gameQuery.genre?.id,
  //     parent_platforms: gameQuery.platform?.id,
  //     ordering: gameQuery.sortOrder,
  //     search: gameQuery.searchText,
  //   },
  // };

  const endpoint = "/genres";
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>(endpoint).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}
