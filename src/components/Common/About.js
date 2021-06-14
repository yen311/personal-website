import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-all">
      <h5 className="about-title">ABOUT</h5>
      <p className="about-p">
        Hello, I'm Yen. Currtently the last year computing student at Australian
        National University and the Alumni of Portland State University. I
        pretty new in learning programming languages, but I love it and enjoy
        building the cool stuffs.
      </p>

      <Link className="about-link" to="resume">
        Check more out!
      </Link>
    </div>
  );
}

export default About;
