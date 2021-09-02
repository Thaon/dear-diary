import { Avatar, AppBar, makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxHeight: "65px",
    backgroundColor: "#1d2c34",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    marginRight: 10,
  },
  avatar: {
    marginRight: theme.spacing(2),

    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  login: {
    justifyContent: "flex-end",
  },
  avatarAndLogin: {
    display: "flex",
  },
}));

function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push('/login')
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.toolbar}>
        <Toolbar className={classes.root}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/home" onClick={() => console.log("cliccato")}>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Link>
          <Link to="/Write">
            <Typography variant="h6" className={classes.title}>
              Write
            </Typography>
          </Link>
          <Link to="/Answer">
            <Typography variant="h6" className={classes.title}>
              Answer
            </Typography>
          </Link>
          <Link to="/Diary" className={classes.title}>
            <Typography variant="h6" className={classes.title}>
              Diary List
            </Typography>
          </Link>
          <Grid className={classes.avatarAndLogin}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="https://images.everyeye.it/img-notizie/batman-cavaliere-oscuro-tornato-indossare-classico-bat-costume-v4-534443-1280x720.webp"
            />
            <Button className={classes.login} color="inherit" onClick={logOut}>
              Logout
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);
