import Card from "../components/Card";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import NavBar from "../components/NavBar";
function EditorResults() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      marginTop: "10",
    },
    cardContainer: {
      marginTop: "10",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Card
          className={classes.cardContainer}
          title={"CONSIGLIO"}
          text={"Testo consiglio'"}
        />
        <Card
          className={classes.cardContainer}
          title={"ATTIVITA'"}
          text={"Testo attivita'"}
        />
      </div>
      <Button
        // onClick={}
        color="secondary"
        style={{ justifyContent: "center" }}
      >
        Salva
      </Button>
    </>
  );
}

export default EditorResults;
