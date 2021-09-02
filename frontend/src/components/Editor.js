import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Button, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import NavBar from "./NavBar";

function Editor() {
  const [text, setText] = useState("");
  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={3}
        style={{
          height: "calc(50vh - 100px)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} style={{ paddingTop: "1rem" }}>
          <ReactQuill
            value={text}
            onChange={(text) => setText(text)}
            style={{
              backgroundColor: "white",
              color: "black",
              maxWidth: "400px",
            }}
          />
        </Paper>
      </Grid>
      <Button
        // onClick={}
        color="secondary"
        style={{ justifyContent: "center" }}
      >
        Dammi Risposta
      </Button>
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

export default Editor;
