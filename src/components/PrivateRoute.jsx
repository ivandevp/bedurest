import React from "react";
import { Redirect, Route } from "react-router-dom";

const isLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("user")); // {}, null

  return !!user;
};

const PrivateRoute = ({ children, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        if (isLoggedIn()) {
          return children;
        } else {
          return <Redirect to={props.redirectTo} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
