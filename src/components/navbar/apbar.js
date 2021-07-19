import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Apbar = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Link 
            to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">About</Button>
          </Link>
          <Link
            to="/project"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">Project</Button>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Apbar;
