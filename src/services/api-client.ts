import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5f11b8dc82e7421bb04999651d7f4c73",
  },
});
