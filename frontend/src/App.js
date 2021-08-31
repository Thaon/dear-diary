import { ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./components/NavBar"
import Card from "./components/Card"


import ops from "./operations";

import AppRouter from "./components/AppRouter";

function App() {
  return (
    <>
    <NavBar/>
    <Grid container direction="column" alignItems="center" justify="center">
    <ThemeProvider theme={ops.theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
    <Card/>
    </Grid>


    </>
   
  );
}

export default App;
