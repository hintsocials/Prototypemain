// ProtectedRoute.js

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the original element
  return element;
};

export default ProtectedRoute;
