import React from "react";
import { Helmet } from "react-helmet";
import Index from "./v2/components";

const App = () => {
  return (
    <>
      <Helmet>
        <style>
          {
            "body {background-image: linear-gradient(to left, #0089ba, #0e6a99, #114d78, #0d3257, #051937); background-repeat: repeat}"
          }
        </style>
      </Helmet>
      <Index />
    </>
  );
};

export default App;
