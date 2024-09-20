import axios, { AxiosRequestConfig } from "axios";

//Interface to type the response received from api backed. It's generic so we can fetch any type of data
//For more details, refer to: https://api.rawg.io/docs/#tag/games
export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

//Our axiosInstance that is used to make api calls
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API,
  },
});

export default class APIClient<T> {
  //Accepting an endpoint param when object first gets created to set the url for the getAll method
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  //Finally we can retrieve our data from a backend
  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config,
    );
    return res.data;
  };

  //function for getting a single piece of data
  get = async (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
