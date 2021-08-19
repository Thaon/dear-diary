import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cookies from "./Cookies";

export const PrivateRoute = ({ Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Cookies.getCookie("TOKEN") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
