import { useContext, createContext, useReducer, useEffect } from "react";
import { authActions } from "../constants";
import { authReducer } from "../reducer";

const AuthContext = createContext();

const authInitState = {
  loading: false,
  error: null,
  user: {},
  encodedToken: null,
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitState);

  useEffect(() => {
    let encodedToken = localStorage.getItem("mediaHive_JWT_Token");

    if (encodedToken) {
      authDispatch({
        type: authActions.LOGIN_SUCCESS,
        payload: { user: {}, encodedToken },
      });
    }
  }, []);

  console.log(authState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
