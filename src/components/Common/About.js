import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About(props) {
  const page = () => {
    switch (props.pages) {
      case "/":
        return { text: "Check out more!", link: "resume" };
      case "about":
        return { text: "Check out more!", link: "resume" };
      case "resume":
        return { text: "Click here get some fun!!", link: "portfolio" };
      case "portfolio":
        return { text: "Contact me", link: "contact" };
      case "contact":
        return { text: "Hit a like!!", link: "contact" };
      default:
        return { text: "", link: "" };
    }
  };
  return (
    <div className='about-all'>
      <h5 className='about-title'>ABOUT</h5>
      <p className='about-p'>
        Hello, I'm Yen. The full stack software developer at jtwo solution based in Adelaide. Currently mainly focus on
        Django, React.js, Flutter (for mobile) and public cloud platform (Azure, AWS). I'm also the Alumni of Australian
        National University and Portland State University. Coding make me feel exciting, love to build awesome projects.
        For 2023, I'll probably explore some new technologies, such as Kubernetes, Golang, GraphQL ...
      </p>
      <Link className='about-link' to={`/${page().link}`}>
        {page().text}
      </Link>
    </div>
  );
}

export default About;
