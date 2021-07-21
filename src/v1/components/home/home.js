import React from 'react';
import {
  Typography,
  CssBaseline,
  Container,
} from "@material-ui/core";

const Home = () => {
    return (
      <>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                Hi! I'm
              </Typography>
              <Typography
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Pranjal Gain
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                Backend developer
              </Typography>
            </Container>
          </div>
        </main>
      </>
    );
}

export default Home
