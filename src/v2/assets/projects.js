import stopwatch from './stopwatch.png';
import travel from './travelling.png';
import portfolio from './portfolio.PNG'
const projects = [
  {
    id: 1,
    project_title: "Travelling Blog",
    project_image: travel,
    project_about:
      "A blog posting website using Flask micro framework. User can create their account and post blogs on the website.",
    project_link: "https://pranjalb21.pythonanywhere.com/",
    project_code: "https://github.com/pranjalb21/Blog_app",
  },
  {
    id: 2,
    project_title: "Stopwatch",
    project_image: stopwatch,
    project_about: "A stopwatch app using the basics of react.",
    project_link: "https://stopwatch-pr.netlify.app/",
    project_code: "https://github.com/pranjalb21/stopwatch",
  },
  {
    id: 3,
    project_title: "Portfolio website",
    project_image: portfolio,
    project_about:
      "This is my portfolio website. I've used ReactJs to create this project",
    project_link: "https://pranjal-gain.netlify.app/",
    project_code: "https://github.com/pranjalb21/portfolio",
  },
];
export default projects;