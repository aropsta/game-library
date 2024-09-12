import { useQuery, UseQueryResult } from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/APIClient";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

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
    queryFn: () => apiClient.getAll(requestConfig),
    staleTime: 1000 * 5,
  });
}

// const dependencies = [gameQuery];
// return useData<Game>("/games", requestConfig, dependencies as []);
