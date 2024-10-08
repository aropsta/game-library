import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import { Game } from "./useGames";
const apiClient = new APIClient<Game>("/games");

//Custom hook to get a single game using our API client.
export default function useGame(slug: string) {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
}
