import React, { useState, useEffect } from "react";
import DotItem from "../Common/dotItem";
import "./AboutContent.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import Country from "./Country.png";
import ImageZoom from "react-medium-image-zoom";

function AboutContent() {
  const Age = () => {
    const [age, setAge] = useState();

    const currentAge = () => {
      const secOfYear = 60 * 60 * 24 * 365;
      const birthday = new Date("March 11, 1997 10:29:00");
      setAge(((Date.now() - birthday) / 1000 / secOfYear).toFixed(8));
    };
    useEffect(() => {
      const time = setInterval(() => currentAge(), 1);
      return () => {
        clearInterval(time);
      };
    }, []);
    return age;
  };

  return (
    <Card className="card-center">
      <div className="card-top">
        <h1>About Me</h1>
        <p className="card-top-p">Fun facts</p>
      </div>
      <div className="card-bottom">
        <h3 className="h3-title">INTRO</h3>
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
        <h3 className="h3-title">ENTERAINMENT</h3>

        <ul>
          <DotItem>Fishing</DotItem>
          <DotItem>Golf</DotItem>
          <DotItem>Gaming</DotItem>
          <DotItem>Traveling</DotItem>
          <DotItem>Baseball</DotItem>
          <DotItem>Hiking</DotItem>
          <DotItem>Baking</DotItem>
          <DotItem>Coffee</DotItem>
        </ul>

        <h3 className="h3-title">FUN STATS</h3>
        <ul>
          <DotItem>Age: {Age()}</DotItem>
          <DotItem>Born: Taoyuan, TW</DotItem>
          <DotItem>Languages: English, Mandarin</DotItem>
          <DotItem>Current City: Canberra, AU</DotItem>
          <DotItem>Favor City: Portland, OR</DotItem>
          <DotItem>Cat: Addict</DotItem>
          <DotItem>Coffee: Lover (Fan of Latta art)</DotItem>
          <DotItem>My car: VW GOLF</DotItem>
          <DotItem>Country visited: 13</DotItem>
        </ul>
        <ImageZoom
          image={{
            src: Country,
            alt: "404",
            className: "img",
            style: { width: "20%" },
          }}
          zoomImage={{
            src: "Country",
            alt: "404",
          }}
        />
      </div>
    </Card>
  );
}

export default AboutContent;
