import { useReducer, useContext, createContext, useEffect } from "react";
import { historyReducer } from "../reducer";

const HistoryContext = createContext();

const initHistoryState = {
  history: [],
  loading: false,
  error: null,
};

export const WatchLaterProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(
    historyReducer,
    initHistoryState
  );

  useEffect(() => {
    let encodedToken = localStorage.getItem("mediaHive_JWT_Token");

    if (encodedToken) {
      //   getAllHistory(encodedToken, historyDispatch);
    }
  }, []);

  console.log(historyState);

  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
