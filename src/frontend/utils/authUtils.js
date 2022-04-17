import { authActions } from "../context/constants";
import { loginService, signupService } from "../services";

export const signupUser = async (
  userData,
  authDispatch,
  callback,
  showToast
) => {
  try {
    authDispatch({ type: authActions.LOADING });

    const {
      data: { createdUser, encodedToken },
      status,
    } = await signupService(userData);

    if (status >= 200 && status < 300) {
      localStorage.setItem("mediaHive_JWT_Token", encodedToken);

      authDispatch({
        type: authActions.SIGNUP_SUCCESS,
        payload: { createdUser, encodedToken },
      });

      callback("/");

      showToast("Signup successful", "success");
    }
  } catch (error) {
    authDispatch({
      type: authActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const loginUser = async (
  userData,
  authDispatch,
  callback,
  showToast
) => {
  try {
    authDispatch({ type: authActions.LOADING });

    const {
      data: { foundUser, encodedToken },
      status,
    } = await loginService(userData);

    if (status >= 200 && status < 300) {
      authDispatch({
        type: authActions.LOGIN_SUCCESS,
        payload: { foundUser, encodedToken },
      });

      localStorage.setItem("mediaHive_JWT_Token", encodedToken);

      callback("/");

      showToast("Login successful", "success");
    }
  } catch (error) {
    authDispatch({
      type: authActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};
