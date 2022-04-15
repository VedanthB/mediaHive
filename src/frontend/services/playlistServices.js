import axios from "axios";

export const getAllPlaylistsService = (token) => {
  return axios.get("/api/user/playlists", {
    headers: { authorization: token },
  });
};
