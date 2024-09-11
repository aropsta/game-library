import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export default function useGames(gameQuery: GameQuery) {
  const dependencies = [gameQuery];
  const requestConfig = {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
    },
  };

  return useData<Game>("/games", requestConfig, dependencies);
}
