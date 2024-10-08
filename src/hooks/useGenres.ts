import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/APIClient";
import APIClient from "../services/APIClient";

//Using our api class to instantiate an axios instance.
const apiClient = new APIClient<Genre>("/genres");

//Interface for the data we will recieve from the /genres endpoint
export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

//Return the object from react query to be able to manage our data
export default function useGenres() {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}
