import { useReducer, useContext, createContext, useEffect } from "react";
import { useToast } from "../../hooks";
import { getAllWatchLaterVideos } from "../../utils/watchLaterUtils";
import { watchLaterReducer } from "../reducer";

const WatchLaterContext = createContext();

const initWatchLaterState = {
  watchLater: [],
  loading: false,
  error: null,
};

export const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, watchLaterDispatch] = useReducer(
    watchLaterReducer,
    initWatchLaterState
  );

  const { showToast } = useToast();

  useEffect(() => {
    let encodedToken = localStorage.getItem("mediaHive_JWT_Token");

    if (encodedToken) {
      getAllWatchLaterVideos(encodedToken, watchLaterDispatch, showToast);
    }
  }, []);

  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);
