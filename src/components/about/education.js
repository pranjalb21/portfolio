import React from "react";
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  Typography,
} from "@material-ui/core";
import SchoolIcon from '@material-ui/icons/School';

const Education = () => {
  return (
    <>
      <Stepper orientation="vertical">
        <Step completed>
          <StepLabel StepIconComponent={SchoolIcon}>
            <Typography>
              Government College of Engineering and Textile Technology
              Berhampore <br />
              Bachelor of Technology in Computer Science and Engineering
              (2017-2021)
            </Typography>
          </StepLabel>
        </Step>
        <Step completed>
          <StepLabel StepIconComponent={SchoolIcon}>
            <Typography>
              Bhabla Tantra Sir Rajendra High School <br /> Higher Secondary
              (2014-2016)
            </Typography>
          </StepLabel>
        </Step>
        <Step completed>
          <StepLabel StepIconComponent={SchoolIcon}>
            <Typography>
              Nirman Adarsha Vidhyapith <br /> Secondary Education (2014)
            </Typography>
          </StepLabel>
        </Step>
      </Stepper>
    </>
  );
};

export default Education;
