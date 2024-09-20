import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";

interface Video {
  id: number | string;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

export default function useVideo(gameId: number | string) {
  const apiClient = new APIClient<Video>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
}
