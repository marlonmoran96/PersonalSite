import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import 'typeface-roboto';
import home from "./static/home.jpg";
//import pic from "./static/pic.jpg"; more pics later 



const theme = createMuiTheme();

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App pictures={[home]} />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);