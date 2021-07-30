import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    height: "100vh",
    backgroundImage:
      "linear-gradient(to left bottom, #4b4453, #474352, #434150, #3f404e, #3b3e4c, #373e4a, #343d48, #323d46, #313d43, #323d40, #343d3d, #363c3b)",
  },
  text: {
    color: "white",
    fontFamily: "'Changa', sans-serif",
  },
  img: {
    height: '250px',
    borderRadius: '5px'
  },
  media: {
    margin: '10vh 0 5vh 0'

  }
});
export default useStyles;
