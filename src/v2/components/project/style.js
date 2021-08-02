import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  paper: {
    height: "auto",
    width: "100vw",
    backgroundImage:
      "linear-gradient(to left bottom, #4b4453, #474352, #434150, #3f404e, #3b3e4c, #373e4a, #343d48, #323d46, #313d43, #323d40, #343d3d, #363c3b)",
  },
  title: {
    color: "white",
    marginTop: "20px",
  },
  text: {
    color: "white",
  },
  cardGrid: {
    padding: "20px 0",
    width: "100vw",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "inherit",
  },
  cardMedia: {
    paddingTop: "56.25%", //16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  icon: {
    color: "white",
    "&:hover": {
      color: "#1abc9c",
    },
  },
});