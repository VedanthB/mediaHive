import { authActions } from "../constants";

export const authReducer = (state, action) => {
  switch (action.type) {
    case authActions.LOADING:
      return { ...state, loading: true };

    case authActions.ERROR:
      return { ...state, error: action.payload, loading: false };

    case authActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.foundUser,
        loading: false,
        encodedToken: action.payload.encodedToken,
      };

    case authActions.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.createdUser,
        loading: false,
        encodedToken: action.payload.encodedToken,
      };

    case authActions.LOGOUT_SUCCESS:
      window.localStorage.removeItem("mediaHive_JWT_Token");
      return {
        ...state,
        user: {},
        loading: false,
        encodedToken: null,
      };

    default:
      return state;
  }
};
