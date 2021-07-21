import { Grid } from '@material-ui/core'
import React from 'react'
import Home from './home/home'
import Navbar from './navbar/navbar'

const Index = () => {
    return (
      <>
        <Grid container>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <Navbar />
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Home />
          </Grid>
        </Grid>
      </>
    );
}

export default Index
