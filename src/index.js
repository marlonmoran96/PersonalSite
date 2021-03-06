import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import 'typeface-roboto';
import home from "./static/home.jpg";
import sunnyview from "./static/sunnyview.jpg";



const theme = createMuiTheme();

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App pictures={[home, sunnyview]} />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);