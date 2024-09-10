import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    //TODO: unsecure API key. Must implement backend to secure it. Building a backend is outside the scope of this project
    key: "5f11b8dc82e7421bb04999651d7f4c73",
  },
});
