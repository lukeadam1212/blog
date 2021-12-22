import React from "react";
import { Route, Navigate } from "react-router-dom";
import { getToken } from "./Common";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !getToken() ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: "/dashboard" }} />
        )
      }
    />
  );
};

export default PublicRoute;
