import { useContext, createContext, useReducer, useEffect } from "react";
import { getVideos } from "../../utils";
import { videosReducer } from "../reducer";

const VideosContext = createContext();

const initVideoState = {
  videos: [],
  loading: false,
  error: null,
};

export const VideosProvider = ({ children }) => {
  const [videosState, videosDispatch] = useReducer(
    videosReducer,
    initVideoState
  );

  useEffect(() => {
    getVideos(videosDispatch);
  }, []);

  // console.log(videosState);

  return (
    <VideosContext.Provider value={{ videosState, videosDispatch }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);
