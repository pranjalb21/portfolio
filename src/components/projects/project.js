import React from 'react';
import Cards from './cards';
import travel from "../../assets/travelling.png";
import stopwatch from "../../assets/stopwatch.png";

const Project = () => {
    return (
      <div>
        <Cards
          image={travel}
          prolink="https://pranjalb21.pythonanywhere.com/"
          prodata="https://github.com/pranjalb21/Blog_app"
          title="Travelling Blog"
          about="A blog posting website using Flask micro framework. User can create their account and post blogs on the website."
        />
        <Cards
          image={stopwatch}
          prolink="https://stopwatch-pr.netlify.app/"
          prodata="https://github.com/pranjalb21/stopwatch"
          title="Stopwatch"
          about="A stopwatch app using the basics of react."
        />
      </div>
    );
}

export default Project
