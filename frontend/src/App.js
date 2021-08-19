import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import ops from "./operations";

import AppRouter from "./components/AppRouter";

function App() {
  return (
    <ThemeProvider theme={ops.theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
