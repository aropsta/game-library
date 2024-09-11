import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export default function useGames(selectedGenre: null | Genre) {
  const requestConfig = {
    params: {
      genres: selectedGenre?.id,
    },
  };

  return useData<Game>("/games", requestConfig, [selectedGenre?.id]);
}
