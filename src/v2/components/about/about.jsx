import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import {NAME} from '../../assets/constant';
import profile_pic from "../../assets/30751.jpg";

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography className={classes.text} variant="h4">
              About Me
            </Typography>
            <Divider />
          </Grid>
          <Grid container justifyContent='center' direction='column' alignItems='center'>
              <Grid item className={classes.media}>
                  <img src={profile_pic} alt={NAME} className={classes.img} />
              </Grid>
              <Grid item>
                  <Typography className={classes.text} variant='h5' gutterBottom>Pranjal Gain</Typography>
              </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default About;
