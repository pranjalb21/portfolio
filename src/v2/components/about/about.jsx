import {
  Divider,
  Grid,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import {
  ABOUT,
  ADDRESS,
  DOB,
  EMAIL_ADDRESS,
  MOBILE_NO,
  NAME,
  PORTFOLIO,
  SKILLS,
} from "../../assets/constant";
import SchoolIcon from '@material-ui/icons/School';
import profile_pic from "../../assets/30751.jpg";
import { EDUCATION } from "../../assets/education";

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} square>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography
              className={classes.text}
              variant="h4"
              style={{ marginTop: "20px" }}
            >
              About Me
            </Typography>
            <Divider className={classes.divider} />
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
            className={classes.data}
          >
            <Grid item className={classes.media}>
              <img src={profile_pic} alt={NAME} className={classes.img} />
            </Grid>
            <Grid item>
              <Typography className={classes.text} variant="h6" gutterBottom>
                {ABOUT}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={4}
            alignItems="flex-start"
            justifyContent="center"
            className={classes.data}
          >
            <Grid item>
              <Typography className={classes.text} variant="h6">
                Personal Info
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="h6" className={classes.text} gutterBottom>
                Full name : {NAME}
              </Typography>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Date of birth : {DOB}
              </Typography>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Address : {ADDRESS}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.text}>
                Contacts
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="h6" className={classes.text} gutterBottom>
                Email : {EMAIL_ADDRESS}
              </Typography>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Mobile : {MOBILE_NO}
              </Typography>
              <Typography variant="h6" className={classes.text} gutterBottom>
                Website : {PORTFOLIO}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text} variant="h6">
                Skills
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="h6" className={classes.text} gutterBottom>
                {SKILLS.map((skill, index) => (
                  <span key={index}>
                    {skill}
                    {index < 3 ? ", " : index === 3 ? " and " : ""}
                  </span>
                ))}
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" justifyContent="center">
            <Grid item>
              <Typography className={classes.text} variant="h6">
                Education
              </Typography>
              <Divider className={classes.divider} />
              <Stepper
                orientation="vertical"
                activeStep="3"
                className={classes.step}
              >
                {EDUCATION.map((part) => (
                  <Step key={part.id}>
                    <StepLabel
                      icon={<SchoolIcon />}
                      style={{ color: "#27ae60" }}
                    >
                      <Typography className={classes.text}>
                        <b>{part.degree}</b>
                      </Typography>
                      <Typography className={classes.text}>
                        {part.institute_name}
                      </Typography>
                      <Typography className={classes.text}>
                        {part.major}
                      </Typography>
                      <Typography className={classes.text}>
                        {part.marks}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default About;
