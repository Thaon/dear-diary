import Card from "../components/Card";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";

function List() {
  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={3}
        style={{
          height: "calc(100vh - 100px)",
          paddingTop: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <Grid item>
          <Paper
            elevation={2}
            style={{ height: "calc(100vh - 130px)", width: "50vw" }}
          >
            <h1>Lista del diario</h1>
          </Paper>
        </Grid>

        <Grid item>
          <Card title={"DIARIO1"} text={"Testo consiglio'"} />
        </Grid>
        <Grid item>
          <Card title={"DIARIO2"} text={"Testo attivita'"} />
        </Grid>
      </Grid>
    </>
  );
}

export default List;
