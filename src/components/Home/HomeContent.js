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
        <Link class="link" to="/about me">
          about me
        </Link>{" "}
        .<br />
        Observe if you want to know someone. Check out my{" "}
        <Link class="link" to="/resume">
          resume
        </Link>{" "}
        ,{" "}
        <Link class="link" to="/protfolio">
          protfolio
        </Link>{" "}
        , or{" "}
        <Link class="link" to="/contact">
          contact
        </Link>{" "}
        me.
      </div>
    </Card>
  );
}

export default HomeContent;
