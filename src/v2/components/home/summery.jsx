import { Typography, Avatar, Grid } from "@material-ui/core";
import React from "react";
import { useStyle } from "./style";

import image from "../../assets/DSC01286.JPG";

const Summery = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      item
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <Avatar
        alt="Pranjal"
        src={image}
        style={{ height: "100px", width: "100px" }}
      />
      <Typography variant="h4" className={classes.textTitle}>
        PRANJAL GAIN
      </Typography>
      <Typography variant="subtitle1" className={classes.textAbout}>
        Full Stack Developer Enthusiast
      </Typography>
    </Grid>
  );
};

export default Summery;
