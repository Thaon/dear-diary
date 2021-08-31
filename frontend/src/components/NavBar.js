import { Avatar, AppBar, makeStyles } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        cursor: 'pointer',
    }
  }));

function NavBar() {
    const classes = useStyles(
    );
    return (
        <div className={classes.root}>
      <AppBar position="static" className={classes.toolbar}>
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Write
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Answer
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Diary List
          </Typography>
          <Avatar alt="Remy Sharp" src="https://images.everyeye.it/img-notizie/batman-cavaliere-oscuro-tornato-indossare-classico-bat-costume-v4-534443-1280x720.webp" />
          <Button color="inherit" className={classes.button}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}




export default NavBar
