import { useState } from "react";
import { withRouter } from "react-router-dom";

import ops from "../operations";

import { Button, TextField } from "@material-ui/core";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Login</h1>
      <TextField
        value={username}
        label="username"
        onChange={(e) => setUsername(e.target.value)}
      ></TextField>
      <TextField
        value={password}
        label="password"
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      <Button
        onClick={async () => {
          let res = await ops.login(username, password);
          if (res.state == "auth") props.history.push("/home");
        }}
        color="secondary"
        style={{justifyContent: "center"}}
      >
        Login
      </Button>
    </>
  );
};

export default withRouter(Login);
