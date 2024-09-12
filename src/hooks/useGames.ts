import {
  useInfiniteQuery,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
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

export default function useGames(gameQuery: GameQuery) {
  const requestConfig = (p: number) => ({
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: p,
    },
  });

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll(requestConfig(pageParam as number)),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      //pages contains data of each page of data retrieved
      lastPage.next ? pages.length + 1 : undefined,
  });
}

// const dependencies = [gameQuery];
// return useData<Game>("/games", requestConfig, dependencies as []);
