import React from "react";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import "./HomeContent.css";

function HomeContent() {
  return (
    <Card className="welcome">
      <div className="home-top">
        <h1 className="home-welcome">Welcome 歡迎</h1>
        <br />
        <p className="home-p">
          A simple, clean, responsive morden website built by React.
        </p>
      </div>
      <div className="home-bottom">
        Welcome to my website. <br />
        Feel free to look around and get know more{" "}
        <Link className="link" to="/about me">
          about me
        </Link>{" "}
        .<br />
        Observe if you want to know someone. Check out my{" "}
        <Link className="link" to="/resume">
          resume
        </Link>{" "}
        ,{" "}
        <Link className="link" to="/protfolio">
          protfolio
        </Link>{" "}
        , or{" "}
        <Link className="link" to="/contact">
          contact
        </Link>{" "}
        me.
      </div>
    </Card>
  );
}

export default HomeContent;
