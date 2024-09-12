import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/APIClient";
import APIClient from "../services/APIClient";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

export default function useGenres() {
  // const queryClient = useQueryClient();

  // const requestConfig = {
  //   params: {
  //     genres: gameQuery.genre?.id,
  //     parent_platforms: gameQuery.platform?.id,
  //     ordering: gameQuery.sortOrder,
  //     search: gameQuery.searchText,
  //   },
  // };

  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}
