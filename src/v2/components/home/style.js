import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  icons: {
    color: "white",
    "&:hover": {
      color: "#2ecc71",
    },
    fontSize: "2rem",
  },
  text: {
    color: "white",
    fontFamily: "'Changa', sans-serif",
  },
  root: {
    paddingTop: "20vh",
  },
  paper: {
    backgroundImage:
      "linear-gradient(to left bottom, #370505, #350917, #311021, #2b1628, #241b2c)",
    height: "100vh",
    width: "100vw",
  },
  img: {
    height: "200px",
    width: "200px",
  },
});

export default useStyles;