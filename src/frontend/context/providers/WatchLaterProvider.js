import { useReducer, useContext, createContext, useEffect } from "react";
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

  useEffect(() => {}, []);

  console.log(watchLaterState);

  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);
