import { ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import EditorResults from "./screens/EditorResults";
import Editor from "./components/Editor";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ops from "./operations";

import AppRouter from "./components/AppRouter";

function App() {
  return (
    <>
      <Grid container direction="column" alignItems="center" justify="center">
        <ThemeProvider theme={ops.theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </Grid>
    </>
  );
}

export default App;
