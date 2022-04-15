import { categoryActions } from '../constants';

export const categoryReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case categoryActions.LOADING:
      return { ...state, loading: true };

    case categoryActions.ERROR:
      return { ...state, error: payload, loading: false };

    case categoryActions.GET_CATEGORIES:
      return { ...state, categories: payload, loading: false };

    default:
      return state;
  }
};
