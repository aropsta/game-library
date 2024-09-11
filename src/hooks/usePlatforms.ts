import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default function usePlatoforms() {
  return useData<Platform>("/platforms/lists/parents");
}
