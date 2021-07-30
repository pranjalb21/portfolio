import {
  Grid,
  IconButton,
  Paper,
  Typography,
  Divider,
  Avatar,
} from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import { BIO, NAME } from "../../assets/constant";
import image from "../../assets/DSC01286.JPG";
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
            <IconButton>
              <Facebook className={classes.icons} />
            </IconButton>

            <IconButton>
              <Instagram className={classes.icons} />
            </IconButton>

            <IconButton>
              <LinkedIn className={classes.icons} />
            </IconButton>

            <IconButton>
              <GitHub className={classes.icons} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Home;
