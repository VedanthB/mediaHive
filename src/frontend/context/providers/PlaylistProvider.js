import { useReducer, useContext, createContext, useEffect } from "react";
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

  useEffect(() => {
    let encodedToken = localStorage.getItem("mediaHive_JWT_Token");

    if (encodedToken) {
      getAllPlaylists(encodedToken, playlistDispatch);
    }
  }, []);

  console.log(playlistState);

  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
