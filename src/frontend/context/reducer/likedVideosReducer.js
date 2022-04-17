import { likeVideosActions } from "../constants";

export const likedVideosReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case likeVideosActions.LOADING:
      return { ...state, loading: true };

    case likeVideosActions.ERROR:
      return { ...state, error: payload, loading: false };

    case likeVideosActions.GET_ALL_LIKED_VIDEOS:
      return { ...state, likedVideos: payload, loading: false };

    case likeVideosActions.ADD_VIDEO_TO_LIKED_VIDEOS:
      return { ...state, likedVideos: payload, loading: false };

    case likeVideosActions.REMOVE_VIDEO_FROM_LIKED_VIDEOS:
      return { ...state, likedVideos: payload, loading: false };

    default:
      return state;
  }
};
