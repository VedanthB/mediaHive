import { playlistActions } from "../constants";

export const playlistReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case playlistActions.LOADING:
      return { ...state, loading: true };

    case playlistActions.ERROR:
      return { ...state, error: payload };

    case playlistActions.GET_ALL_PLAYLISTS:
      return { ...state, playlists: payload, loading: false };

    case playlistActions.ADD_PLAYLIST:
      return { ...state, playlists: payload, loading: false };

    default:
      return state;
  }
};