import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useStyle } from "./style";
import { FACEBOOK_ADDRESS, INSTAGRAM_ADDRESS, LINKEDIN_ADDRESS, GITHUB_ADDRESS } from '../../assets/constant';


const Footer = () => {
    const classes = useStyle();
  return (
    <>
      <Grid
        container
        item
        alignItems="flex-end"
        justifyContent="center"
        direction="row"
        className={classes.footer}
      >
        <IconButton href={FACEBOOK_ADDRESS} target="_blank">
          <FacebookIcon style={{ color: "#129AF6" }} fontSize="large" />
        </IconButton>
        <IconButton href={INSTAGRAM_ADDRESS} target="_blank">
          <InstagramIcon style={{ color: "#E1306C" }} fontSize="large" />
        </IconButton>
        <IconButton href={GITHUB_ADDRESS} target="_blank">
          <GitHubIcon style={{ color: "white" }} fontSize="large" />
        </IconButton>
        <IconButton href={LINKEDIN_ADDRESS} target="_blank">
          <LinkedInIcon style={{ color: "skyblue" }} fontSize="large" />
        </IconButton>
      </Grid>
    </>
  );
};

export default Footer;
