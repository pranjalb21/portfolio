import React from "react";
import { useStyles } from "./style";
import {
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  IconButton,
  CardActions,
} from "@material-ui/core";
import projects from "../../assets/projects";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";

const Project = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} square>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4" className={classes.title}>
            Projects
          </Typography>
          <Divider style={{ backgroundColor: "white" }} />
        </Grid>
        <Grid
          container
          justifyContent="center"
          spacing={4}
          className={classes.cardGrid}
        >
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  alt={project.project_title}
                  image={project.project_image}
                  className={classes.cardMedia}
                />
                <CardContent>
                  <Typography variant="h5" className={classes.text}>
                    {project.project_title}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.text}>
                    {project.project_about}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    href={project.project_link}
                    target="_blank"
                    className={classes.icon}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    href={project.project_code}
                    target="_blank"
                    className={classes.icon}
                  >
                    <DeveloperModeIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Project;
