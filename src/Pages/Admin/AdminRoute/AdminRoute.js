import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="spinner-border text-primary m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (user?.email && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
