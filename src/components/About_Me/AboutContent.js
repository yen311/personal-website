import React, { useState, useEffect } from "react";
import DotItem from "../Common/dotItem";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

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
    <Card className='card-center'>
      <div className='card-top'>
        <h1>About Me</h1>
        <p className='card-top-p'>Fun facts</p>
      </div>
      <div className='card-bottom'>
        <h3 className='mb-3'>
          <span className='sub-title py-2'>Intro</span>
        </h3>
        <p className='card-bottom-p'>
          I am the junior software developer at jtwo, a cloud consulting
          company. Currently living in Adelaide, Australia. My coding journey
          start from 2019. I study for two years in Australian National
          University from 2020 and start to becoming a software developer since
          2022. I have learned and explore multiple programming languages,
          currently mainly focus on Javascript (React), Python (Django) and
          those major public cloud platform (Azure && AWS != GCP). I have also
          worked on couple interesting projects. Take a look at those fun stuffs
          at{" "}
          <Link className='link' to='/portfolio'>
            portfolio
          </Link>{" "}
          section. <br></br>I'm a finance guy before I start to code. Changing
          the discipline might be one of the most important decision which I
          made in my life. Nevertheless, it's also the best decision which I
          have ever made as well. Explore more around this website and get know
          more about me. Feel free to reach me out if you would like to make
          friend with me :)))
        </p>
        <h3 className='mb-3'>
          <span className='sub-title py-2'>Interest</span>
        </h3>
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
        <h3 className='mb-3'>
          <span className='sub-title py-2'>Fun Stats</span>
        </h3>
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
      </div>
    </Card>
  );
}

export default AboutContent;
