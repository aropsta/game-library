import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import { FetchResponse } from "../services/APIClient";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../store";

//Creating a new axios api client whose endpoint in the api is /games
const apiClient = new APIClient<Game>("/games");

//Interfeace for the fields we want from the data that is returned from API
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

//Custom hook which returns the query object from react query with various properties apart from our data, for managing our query
export default function useGames() {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  //Fucntion that returns an object for our query params.
  //Takes in a page argument so the react Query function can set from which page we are getting the data
  const requestConfig = (p: number) => ({
    params: {
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
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
      //pages argument is data for each page retrieved so far
      //if lastPage.next is null, return undefined, else get the next page
      lastPage.next ? pages.length + 1 : undefined,
    staleTime: 5 * 1000 * 60, //Data considered old after 5mins
  });
}
