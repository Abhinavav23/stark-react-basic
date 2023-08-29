import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthNavigator = ({ children }) => {
  const { user } = useAuth();
  if (!user.username) {
    return <Navigate to="/login" replace/>
  } else {
    return children;
  }
};
