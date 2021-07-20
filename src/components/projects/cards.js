import React from "react";
import {
  Card,
  CardActions,
  Typography,
  Button,
  CardContent,
  CardMedia,
  Container,
  Grid,
  CssBaseline,
} from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import CodeIcon from "@material-ui/icons/Code";
import useStyle from "../style";
import data from "../data";

const Cards = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className={classes.cardGrid}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia image={item.image} className={classes.cardMedia} />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {item.about}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" color="primary">
                    <a href={item.project_link} target="_blank">
                      <VisibilityIcon />
                    </a>
                  </Button>
                  <Button size="medium" color="primary">
                    <a href={item.project_code} target="_blank">
                      <CodeIcon />
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cards;
