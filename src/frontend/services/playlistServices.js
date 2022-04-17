import axios from "axios";

export const getAllPlaylistsService = (token) => {
  return axios.get("/api/user/playlists", {
    headers: { authorization: token },
  });
};

export const createPlaylistService = (token, playlistData) => {
  return axios.post(
    "/api/user/playlists",
    { playlist: playlistData },
    {
      headers: { authorization: token },
    }
  );
};

export const addVideoToPlaylistService = (token, video, playlistId) => {
  return axios.post(
    `/api/user/playlists/${playlistId}`,
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export const removeVideoFromPlaylistService = (token, playlistId, videoId) => {
  return axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
    headers: { authorization: token },
  });
};

export const deletePlaylistService = (token, playlistId) => {
  return axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: token },
  });
};
