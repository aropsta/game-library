import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default function usePlatofrms() {
  return useData<Platform>("https://api.raw.io/api/platforms/lists/parents");
}
