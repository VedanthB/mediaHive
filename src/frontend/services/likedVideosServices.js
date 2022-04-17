import axios from "axios";

export const getAllLikedVideosService = (token) => {
  return axios.get("/api/user/likes", {
    headers: { authorization: token },
  });
};

export const addVideoToLikedVideosService = (token, video) => {
  return axios.post(
    "/api/user/likes",
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export const removeVideoFromLikedVideosService = (token, videoId) => {
  return axios.delete(`/api/user/likes/${videoId}`, {
    headers: { authorization: token },
  });
};
