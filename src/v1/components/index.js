import React from "react";

import Home from "./home/home";
import Apbar from "./navbar/apbar";
import Error from "./error/error";
import About from "./about/about";
import Project from "./projects/project";
import Contact from "./contact/contact";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Router>
        <CssBaseline />
        <Apbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/about">
            <About />
          </Route>
          <Route  path="/project">
            <Project />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>
          <Route  path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Index;
