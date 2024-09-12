import { useQuery, UseQueryResult } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { GameQuery } from "../App";
import { FetchResponse } from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export default function useGames(
  gameQuery: GameQuery,
): UseQueryResult<FetchResponse<Game>> {
  const endpoint = "/games";

  const requestConfig = {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  };

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>(endpoint, requestConfig)
        .then((res) => res.data),
    staleTime: 1000 * 5,
  });
}

// const dependencies = [gameQuery];
// return useData<Game>("/games", requestConfig, dependencies as []);
