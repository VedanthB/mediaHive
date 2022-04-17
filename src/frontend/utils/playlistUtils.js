import { playlistActions } from "../context/constants";
import {
  addVideoToPlaylistService,
  createPlaylistService,
  deletePlaylistService,
  getAllPlaylistsService,
  removeVideoFromPlaylistService,
} from "../services";

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

export const createPlaylist = async (token, playlistData, playlistDispatch) => {
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
    }
  } catch (error) {
    playlistDispatch({
      type: playlistActions.ERROR,
      payload: error,
    });
  }
};

export const addToPlaylist = async (
  token,
  playlistId,
  video,
  playlistDispatch
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

      console.log("add to playlist");
    }
  } catch (error) {
    playlistDispatch({
      type: playlistActions.ERROR,
      payload: error,
    });
  }
};

export const removeVideoFromPlaylist = async (
  token,
  playlistId,
  videoId,
  playlistDispatch
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
      console.log("deleted video from playlist");
    }
  } catch (error) {
    playlistDispatch({
      type: playlistActions.ERROR,
      payload: error,
    });
  }
};

export const deletePlaylist = async (token, playlistId, playlistDispatch) => {
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
    }
  } catch (error) {
    playlistDispatch({
      type: playlistActions.ERROR,
      payload: error,
    });
  }
};
