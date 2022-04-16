import axios from "axios";

export const getAllWatchLaterVideosService = (token) => {
  return axios.get("/api/user/watchlater", {
    headers: { authorization: token },
  });
};

export const addVideoToWatchLaterService = (token, video) => {
  return axios.post(
    "/api/user/watchlater",
    {
      headers: { authorization: token },
    },
    { video: video }
  );
};

export const removeVideoToWatchLaterService = (token, videoId) => {
  return axios.delete(`/api/user/${videoId}`, {
    headers: { authorization: token },
  });
};
