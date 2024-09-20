import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";

//Interface that matches the response we get from RAWG
interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

//Returns screenshots from RAWG
export default function useScreenshots(gameId: number) {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
}
