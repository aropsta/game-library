import useGenres from "./useGenres";

//Returns a genre for a given ID
export default function useGenre(id?: number) {
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === id);
}
