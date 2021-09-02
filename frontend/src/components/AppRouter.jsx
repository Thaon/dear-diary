import React from "react";
import { useEffect } from "react";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { PrivateRoute } from "../helpers/PrivateRoute";

import HomePage from "./HomePage";
import LoginScreen from "../screens/LoginScreen";
import EditorResults from "../screens/EditorResults";
import Editor from "./Editor";
import List from "../screens/List";

import ops from "../operations";

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
      {/* public routes */}
      <Route path="/login" component={() => <LoginScreen />} />

      {/* <PrivateRoute exact path={"/"} render={() => <Redirect to={"/home"} />} /> */}

      {/* protected routes */}
      <PrivateRoute path="/home" Component={HomePage} />
      <PrivateRoute path="/Answer" Component={EditorResults} />
      <PrivateRoute path="/Write" Component={Editor} />
      <PrivateRoute path="/Diary" Component={List} />

      {/* <PrivateRoute path={"/"} render={() => <Redirect to={"/home"} />} /> */}

      {/* 404 not found */}
      <Route path={"/"} component={() => <Redirect to={"/home"} />} />
    </Switch>
  );
}

export default withRouter(AppRouter);
