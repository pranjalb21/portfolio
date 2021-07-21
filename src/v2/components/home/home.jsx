import { Button, Grid } from "@material-ui/core";
import React from "react";
import Footer from "./footer";
import { useStyle } from "./style";
import Summery from "./summery";

const Home = () => {
  const classes = useStyle();
  return (
    <>
      <Grid
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "100px" }}
      >
        <Summery />
        <Button className={classes.button} color="inherit" variant="outlined">
          Resume
        </Button>
        <Footer />
      </Grid>
    </>
  );
};

export default Home;
