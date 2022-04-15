import { playlistActions } from "../context/constants";
import { getAllPlaylistsService } from "../services";

export const getAllPlaylists = async (token, playlistDispatch) => {
  try {
    playlistDispatch({ type: playlistActions.LOADING });

    const {
      data: { playlists },
      status,
    } = await getAllPlaylistsService(token);

    if (status >= 200 && status < 300) {
      playlistDispatch({
        type: playlistActions.GET_ALL_PLAYLISTS,
        payload: playlists,
      });
    }
  } catch (error) {
    playlistDispatch({
      type: playlistActions.ERROR,
      payload: error,
    });
  }
};
