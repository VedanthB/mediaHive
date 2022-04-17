import axios from "axios";

export const getAllWatchLaterVideosService = (token) => {
  return axios.get("/api/user/watchlater", {
    headers: { authorization: token },
  });
};

export const addVideoToWatchLaterService = (token, video) => {
  return axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export const removeVideoToWatchLaterService = (token, videoId) => {
  return axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: { authorization: token },
  });
};
