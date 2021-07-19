import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";

const Details = () => {
  return (
    <>
      <IconButton
        aria-label="InstagramIcon"
        target="_blank"
        href="https://www.instagram.com/pranjalgain/"
      >
        <InstagramIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="FacebookIcon"
        target="_blank"
        href="https://www.facebook.com/pranjal.gain.5/"
      >
        <FacebookIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="GitHubIcon"
        target="_blank"
        href="https://github.com/pranjalb21"
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="LinkedInIcon"
        target="_blank"
        href="https://www.linkedin.com/in/pranjal-gain-648b5b109/"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default Details;
