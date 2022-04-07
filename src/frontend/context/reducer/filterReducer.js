import { filterActions } from "../constants";

export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case filterActions.FILTER_BY:
      return { ...state, filterBy: payload };

    default:
      return state;
  }
};
