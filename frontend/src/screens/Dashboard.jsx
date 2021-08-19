import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import ops from "../operations";

import { Button } from "@material-ui/core";

const Dashboard = (props) => {
  const user = useSelector((state) => state.user.value);

  return (
    <>
      <h1
        onClick={() => console.log(user)}
      >{`Logged in as ${user?.username}`}</h1>
      <Button
        onClick={async () => {
          await ops.logout();
          props.history.push("/login");
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default withRouter(Dashboard);
