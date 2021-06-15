import React from "react";
import WorldMap from "./SVG_WorldMap";
import DotItem from "../Common/dotItem";
import "./AboutContent.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <Card className="card-center">
      <div className="card-top">
        <h1>About Me</h1>
      </div>
      <div className="card-bottom">
        <h3 className="aboutMe-title">INTRO</h3>
        <p className="card-bottom-p">
          I am the second-year master student in computer science currently. My
          coding journey start from 2019. In the past two years study. I have
          learned multiple programming languages, and developed in couple
          projects to bulid some interesting works. Take a look at those fun
          stuffs at{" "}
          <Link className="link" to="/portfolio">
            portfolio
          </Link>{" "}
          section. I majored finance for my bechlor degree. Changing the study
          discipline might be one of the most important decision which I made in
          my life. Nevertheless, it's also the best decision which I have ever
          made as well. The reason why I love coding so much is that it can make
          my ideas and designs into reality. Building a easy-to-use and good
          looking interface will always being my goals. I believe that it can
          bring lot of happiness both for me and the users.
        </p>
        <h3 className="aboutMe-title">ENTERAINMENT</h3>
        <p className="card-bottom-p">
          <ul>
            <DotItem>Fishing</DotItem>
            <DotItem>Golf</DotItem>
            <DotItem>Gaming</DotItem>
            <DotItem>Traveling</DotItem>
            <DotItem>Baseball</DotItem>
            <DotItem>Hiking</DotItem>
            <DotItem>Baking</DotItem>
          </ul>
        </p>
        <h3 className="aboutMe-title">FUN STATS</h3>
        <p className="card-bottom-p"></p>
      </div>
    </Card>
  );
}

export default AboutContent;
