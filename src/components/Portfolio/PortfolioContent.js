import React from "react";
import ProjectCard from "./ProjectCard";
import Card from "../UI/Card";
import PortfolioData from "../../data/PortfolioData";
import peronalImg from "./yenWebsite.jpg";
import ourCultureImg from "./graduateHouse.jpg";
import wtfoodImg from "./wtfood.png";
import metroImg from "./metro.jpg";

function PortfolioContent() {
  return (
    <Card className="card-center">
      <div className="card-top">
        <h1 className="card-title">Project Portfolio</h1>
        <br />
        <p className="card-top-p">The project which I have built</p>
      </div>
      <div className="card-bottom">
        <ProjectCard data={PortfolioData.personalWebsite} img={peronalImg} />
        <ProjectCard data={PortfolioData.ourCulture} img={ourCultureImg} />
        <ProjectCard data={PortfolioData.WTFood} img={wtfoodImg} />
        <ProjectCard data={PortfolioData.Metro} img={metroImg} />
      </div>
    </Card>
  );
}

export default PortfolioContent;
