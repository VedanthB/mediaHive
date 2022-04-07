import axios from "axios";

export const getVideosService = () => {
  return axios.get("api/videos");
};
