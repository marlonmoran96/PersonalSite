import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Switch, Route, withRouter } from "react-router-dom";

function Main(props) {
  const { location } = props;
  return (
    <main>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            
          </Switch>
    </main>
  );
}


export default withRouter(Main);