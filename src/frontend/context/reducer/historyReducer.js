import { historyActions } from "../constants";

export const historyReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case historyActions.LOADING:
      return { ...state, loading: true };

    case historyActions.ERROR:
      return { ...state, error: payload, loading: false };

    case historyActions.GET_ALL_HISTORY:
      return { ...state, history: payload, loading: false };

    case historyActions.ADD_VIDEO_TO_HISTORY:
      return { ...state, history: payload, loading: false };

    case historyActions.REMOVE_VIDEO_FROM_HISTORY:
      return { ...state, history: payload, loading: false };

    case historyActions.DELETE_ALL_HISTORY:
      return { ...state, history: payload, loading: false };

    default:
      return state;
  }
};
