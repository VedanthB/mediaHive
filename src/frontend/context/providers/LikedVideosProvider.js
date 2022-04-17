import { useReducer, useContext, createContext, useEffect } from "react";
import { useToast } from "../../hooks";
import { getAllLikedVideos } from "../../utils";
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

  const { showToast } = useToast();

  useEffect(() => {
    let encodedToken = localStorage.getItem("mediaHive_JWT_Token");

    if (encodedToken) {
      getAllLikedVideos(encodedToken, likedVideosDispatch, showToast);
    }
  }, []);

  return (
    <LikedVideosContext.Provider
      value={{ likedVideosState, likedVideosDispatch }}
    >
      {children}
    </LikedVideosContext.Provider>
  );
};

export const useLikedVideos = () => useContext(LikedVideosContext);
