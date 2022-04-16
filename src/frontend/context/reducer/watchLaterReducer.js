import { watchLaterActions } from "../constants";

export const watchLaterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case watchLaterActions.LOADING:
      return { ...state, loading: true };

    case watchLaterActions.ERROR:
      return { ...state, error: payload, loading: false };

    case watchLaterActions.GET_ALL_WATCH_LATER_VIDEOS:
      return { ...state, watchLater: payload, loading: false };

    case watchLaterActions.ADD_VIDEO_TO_WATCH_LATER:
      return { ...state, watchLater: payload, loading: false };

    case watchLaterActions.REMOVE_VIDEO_TO_WATCH_LATER:
      return { ...state, watchLater: payload, loading: false };

    default:
      return state;
  }
};
