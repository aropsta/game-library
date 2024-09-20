import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";

//Interface that matches the response we get from RAWG to this endpoint
interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}
export default function useScreenshots(gameId: number) {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
}
