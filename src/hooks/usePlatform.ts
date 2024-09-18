import usePlatforms from "./usePlatforms";

export default function usePlatform(id?: number) {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((g) => g.id === id);
}
