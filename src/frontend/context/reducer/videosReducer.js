import { videoActions } from "../constants";

export const videosReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case videoActions.LOADING:
      return { ...state, loading: true };

    case videoActions.GET_VIDEOS_SUCCESS:
      return { ...state, videos: payload, loading: false };

    case videoActions.ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
