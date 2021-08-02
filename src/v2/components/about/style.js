import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    height: "auto",
    width: "100vw",
    backgroundImage:
      "linear-gradient(to left bottom, #4b4453, #474352, #434150, #3f404e, #3b3e4c, #373e4a, #343d48, #323d46, #313d43, #323d40, #343d3d, #363c3b)",
  },
  text: {
    color: "white",
    fontFamily: "'Georama', sans-serif",
    maxWidth: "400px",
  },
  img: {
    height: "250px",
    borderRadius: "5px",
  },
  media: {
    margin: "10vh 0 5vh 0",
  },
  divider: {
    backgroundColor: "white",
  },
  skill: {
    marginTop: "20px",
    paddingBottom: "0",
  },
  data: {
    marginBottom: "0",
    marginRight: "0",
  },
  step: {
    backgroundColor: "inherit",
  },
  btn: {
    fontWeight: 'bold'
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'white'
  }
});
export default useStyles;
