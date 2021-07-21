import { ThemeProvider } from "@material-ui/core";
import React from "react";
import Index from './components/index';
import theme from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Index />
      </ThemeProvider>
    </>
  );
};

export default App;
