import { playlistActions } from "../context/constants";
import {
  addVideoToPlaylistService,
  createPlaylistService,
  deletePlaylistService,
  getAllPlaylistsService,
  removeVideoFromPlaylistService,
} from "../services";

export const getAllPlaylists = async (token, playlistDispatch, showToast) => {
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

      showToast("Get all playlist success!", "success");
    }
  } catch (error) {
    playlistDispatch({
      type: playlistActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const createPlaylist = async (
  token,
  playlistData,
  playlistDispatch,
  showToast
) => {
  try {
    playlistDispatch({ type: playlistActions.LOADING });

    const {
      data: { playlists },
      status,
    } = await createPlaylistService(token, playlistData);

    if (status >= 200 && status < 300) {
      playlistDispatch({
        type: playlistActions.ADD_PLAYLIST,
        payload: playlists,
      });

      showToast("Playlist created!", "success");
    }
  } catch (error) {
    playlistDispatch({
      type: playlistActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const addToPlaylist = async (
  token,
  playlistId,
  video,
  playlistDispatch,
  showToast
) => {
  try {
    playlistDispatch({ type: playlistActions.LOADING });
    const {
      data: { playlist },
      status,
    } = await addVideoToPlaylistService(token, video, playlistId);

    if (status >= 200 && status < 300) {
      playlistDispatch({
        type: playlistActions.ADD_VIDEO_TO_PLAYLIST,
        payload: playlist,
      });

      showToast("Added video to playlist!", "success");
    }
  } catch (error) {
    playlistDispatch({
      type: playlistActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const removeVideoFromPlaylist = async (
  token,
  playlistId,
  videoId,
  playlistDispatch,
  showToast
) => {
  try {
    playlistDispatch({ type: playlistActions.LOADING });

    const {
      data: { playlist },
      status,
    } = await removeVideoFromPlaylistService(token, playlistId, videoId);

    if (status >= 200 && status < 300) {
      playlistDispatch({
        type: playlistActions.DELETE_VIDEO_FROM_PLAYLIST,
        payload: playlist,
      });

      showToast("Deleted video from playlist!", "success");
    }
  } catch (error) {
    playlistDispatch({
      type: playlistActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const deletePlaylist = async (
  token,
  playlistId,
  playlistDispatch,
  showToast
) => {
  try {
    playlistDispatch({ type: playlistActions.LOADING });

    const {
      data: { playlists },
      status,
    } = await deletePlaylistService(token, playlistId);

    if (status >= 200 && status < 300) {
      playlistDispatch({
        type: playlistActions.DELETE_PLAYLIST,
        payload: playlists,
      });

      showToast("Delete playlist successful!", "success");
    }
  } catch (error) {
    playlistDispatch({
      type: playlistActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};
