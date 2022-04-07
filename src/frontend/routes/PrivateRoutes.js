import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/providers";

const PrivateRoutes = () => {
  const {
    authState: { encodedToken },
  } = useAuth();

  return encodedToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
