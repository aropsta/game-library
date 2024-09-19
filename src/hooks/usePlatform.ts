import usePlatforms from "./usePlatforms";

//Returns a particular platform for a given ID
export default function usePlatform(id?: number) {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((g) => g.id === id);
}
