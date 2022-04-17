import { useReducer, useContext, createContext, useEffect } from "react";
import { useToast } from "../../hooks";
import { getAllPlaylists } from "../../utils";
import { playlistReducer } from "../reducer";

const PlaylistContext = createContext();

const initPlaylistState = {
  playlists: [],
  loading: false,
  error: null,
};

export const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initPlaylistState
  );

  const { showToast } = useToast();

  useEffect(() => {
    let encodedToken = localStorage.getItem("mediaHive_JWT_Token");

    if (encodedToken) {
      getAllPlaylists(encodedToken, playlistDispatch, showToast);
    }
  }, []);

  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
