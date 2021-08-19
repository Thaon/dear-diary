import React from "react";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { PrivateRoute } from "../helpers/PrivateRoute";

import LoginScreen from "../screens/LoginScreen";
import Dashboard from "../screens/Dashboard";
import { useEffect } from "react";
import ops from "../operations";
import { useState } from "react";

function AppRouter(props) {
  useEffect(() => {
    async function confirmLogin() {
      let logged = await ops.getMe();
      if (!logged) {
        props.history.push("/login");
      } else {
      }
    }

    if (props.history.location.pathname != "/login") confirmLogin();
  }, []);

  return (
    <Switch>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <PrivateRoute path="/home" Component={Dashboard} />
      <PrivateRoute exact path={`/`} render={() => <Redirect to={`/home`} />} />
      <PrivateRoute path={`/`} render={() => <Redirect to={`/home`} />} />
    </Switch>
  );
}

export default withRouter(AppRouter);
