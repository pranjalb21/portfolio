import React from "react";
import { Typography, Button } from "@material-ui/core";
import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    alert('Sorry page not found');
  }, [])
  return (
    <>
      <Typography variant="h1" gutterBottom align="center" color="textPrimary">
        Oops!
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        color="textSecondary"
      >
        Error 404
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        color="textSecondary"
      >
        Page not found
      </Typography>
      <Button color='primary' variant='contained' href='/'>Back to home</Button>
    </>
  );
};

export default Error;
