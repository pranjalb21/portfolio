import React from "react";
import { Button, Typography } from "@material-ui/core";
import { useStyle } from "./style";

const Navbar = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <Button className={classes.button}>
        <Typography style={{ color: "white" }}>Home</Typography>
      </Button>
      <Button className={classes.button}>
        <Typography style={{ color: "white" }}>About</Typography>
      </Button>
      <Button className={classes.button}>
        <Typography style={{ color: "white" }}>Project</Typography>
      </Button>
      <Button className={classes.button}>
        <Typography style={{ color: "white" }}>Contact</Typography>
      </Button>
    </React.Fragment>
  );
};

export default Navbar;
