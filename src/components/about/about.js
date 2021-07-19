import React from "react";
import { Typography } from "@material-ui/core";
import Education from "./education";

const About = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom align="center">
        About Me
      </Typography>
      <Typography
        gutterBottom
        align="center"
        variant="h4"
        color="textSecondary"
      >
        I'm Pranjal Gain. I completed my B.Tech degree from Government College
        of Engineering and Textile Technology Berhampore. I'm a fullstack web
        developer enthusiast.
      </Typography>
      <Education />
    </>
  );
};

export default About;
