import axios from "axios";

export const getAllHistoryService = (token) => {
  return axios.get("/api/user/history", {
    headers: { authorization: token },
  });
};

export const addVideoToHistoryService = (token, video) => {
  return axios.post(
    "/api/user/history",
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export const removeVideoFromHistoryService = (token, videoId) => {
  return axios.delete(`/api/user/history/${videoId}`, {
    headers: { authorization: token },
  });
};

export const deleteAllHistoryService = (token) => {
  return axios.delete("api/user/history/all", {
    headers: { authorization: token },
  });
};
