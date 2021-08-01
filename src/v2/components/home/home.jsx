import { Grid, IconButton, Paper, Typography, Avatar } from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import {BIO, FACEBOOK_ADDRESS, GITHUB_ADDRESS, INSTAGRAM_ADDRESS, LINKEDIN_ADDRESS, NAME} from '../../assets/constant';
import image from '../../assets/DSC01286.JPG';
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} square>
        <Grid
          className={classes.root}
          container
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          xs={12}
        >
          <Grid item>
            <Avatar alt={NAME} src={image} className={classes.img} />
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.text}>
              Hi! I'm
            </Typography>
            <Typography variant="h3" className={classes.text}>
              {NAME}
            </Typography>
            <Typography className={classes.text}>{BIO}</Typography>
          </Grid>
          <Grid
            xs={12}
            container
            alignItems="flex-start"
            justifyContent="center"
          >
            <IconButton href={FACEBOOK_ADDRESS} target='_blank'>
              <Facebook className={classes.icons} />
            </IconButton>

            <IconButton href={INSTAGRAM_ADDRESS} target='_blank'>
              <Instagram className={classes.icons} />
            </IconButton>

            <IconButton href={LINKEDIN_ADDRESS} target='_blank'>
              <LinkedIn className={classes.icons} />
            </IconButton>

            <IconButton href={GITHUB_ADDRESS} target='_blank'>
              <GitHub className={classes.icons} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Home;
