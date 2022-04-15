import { useReducer, useContext, createContext } from "react";
import { playlistReducer } from "../reducer";

const PlaylistContext = createContext();

const initPlaylistState = {
  playlists: [],
  loading: false,
  error: null,
};

export const PlaylistProvider = ({ children }) => {
  const [playlistState, setPlaylistState] = useReducer(
    playlistReducer,
    initPlaylistState
  );

  return (
    <PlaylistContext.Provider value={{ playlistState, setPlaylistState }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
