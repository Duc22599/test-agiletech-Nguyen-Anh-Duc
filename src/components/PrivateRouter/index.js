import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const getToken = sessionStorage.getItem("token");

  return <div>{getToken ? children : <Navigate to={`/login`} />}</div>;
};
