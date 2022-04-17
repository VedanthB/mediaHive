import { useReducer, useContext, createContext, useEffect } from "react";
import { getAllLikedVideosVideos } from "../../utils/likedVideosUtils";
import { likedVideosReducer } from "../reducer";

const LikedVideosContext = createContext();

const initLikedVideosState = {
  likedVideos: [],
  loading: false,
  error: null,
};

export const LikedVideosProvider = ({ children }) => {
  const [likedVideosState, likedVideosDispatch] = useReducer(
    likedVideosReducer,
    initLikedVideosState
  );

  useEffect(() => {
    let encodedToken = localStorage.getItem("mediaHive_JWT_Token");

    if (encodedToken) {
      getAllLikedVideosVideos(encodedToken, likedVideosDispatch);
    }
  }, []);

  console.log(likedVideosState);

  return (
    <LikedVideosContext.Provider
      value={{ likedVideosState, likedVideosDispatch }}
    >
      {children}
    </LikedVideosContext.Provider>
  );
};

export const useLikedVideos = () => useContext(LikedVideosContext);
