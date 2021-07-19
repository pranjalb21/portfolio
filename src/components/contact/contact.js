import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import { Typography } from "@material-ui/core";
import Details from "./details";

const Contact = () => {
  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        You can reach out to me by following ways
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        <CallIcon /> 9800384120
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        <EmailIcon /> pranjalgain052@gmail.com
      </Typography>
      <Typography gutterBottom align='center'>
        <Details />
      </Typography>
    </>
  );
};

export default Contact;
