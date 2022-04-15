import { playlistActions } from "../constants";

export const playlistReducer = (action, state) => {
  const { type, payload } = action;

  switch (type) {
    case playlistActions.GET_ALL_PLAYLISTS:
      return { ...state, playlists: payload };

    case playlistActions.ADD_PLAYLIST:
      return { ...state, playlists: payload };

    default:
      return state;
  }
};
