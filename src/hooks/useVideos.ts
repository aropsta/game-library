import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";

//interface for the data we get from RAWG
interface Video {
  id: number | string;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

//Get a video using our API client from RAWG. Object has different video resolutions hence getAll instead of get
export default function useVideo(gameId: number | string) {
  const apiClient = new APIClient<Video>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
}
