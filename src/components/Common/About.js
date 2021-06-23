import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About(props) {
  const page = () => {
    switch (props.pages) {
      case "personal-website":
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
    <div className="about-all">
      <h5 className="about-title">ABOUT</h5>
      <p className="about-p">
        Hello, I'm Yen. Currtently the last year computing student at Australian
        National University and the Alumni of Portland State University. I
        pretty new in learning programming languages, but I love it and enjoy
        building the cool stuffs.
      </p>

      <Link className="about-link" to={`/${page().link}`}>
        {page().text}
      </Link>
    </div>
  );
}

export default About;
