import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  Typography,
  Button,
  CardContent,
  CardMedia,
  Container,
  Grid
} from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import CodeIcon from "@material-ui/icons/Code";
import useStyle from "../style";

const Cards = ({image, title, about, prolink, prodata}) => {
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="md" className={classes.cardGrid}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia image={image} className={classes.cardMedia} />
                <CardContent className={classes.cardContent}>
                  <Typography>
                    {title}
                  </Typography>
                  <Typography>
                    {about}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  <a href={prolink} target="_blank">
                    <VisibilityIcon />
                  </a>
                </Button>
                <Button size="medium" color="primary">
                  <a href={prodata} target="_blank">
                    <CodeIcon />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cards;
