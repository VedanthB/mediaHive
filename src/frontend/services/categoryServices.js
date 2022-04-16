import axios from "axios";

export const getCategoriesService = () => {
  return axios.get("/api/categories");
};
