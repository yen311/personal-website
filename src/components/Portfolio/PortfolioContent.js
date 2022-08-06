import React from "react";
import ProjectCard from "./ProjectCard";
import Card from "../UI/Card";

function PortfolioContent({ projects }) {
  return (
    <Card className='card-center'>
      <div className='card-top'>
        <h1>Project Portfolio</h1>
        <p className='card-top-p'>The project which I have built.</p>
      </div>
      <div className='card-bottom'>
        <div className='d-flex flex-wrap'>
          {projects.map((item, key) => {
            if (item.type === "Personal") return <ProjectCard data={item} key={key} />;
          })}
        </div>
      </div>
    </Card>
  );
}

export default PortfolioContent;
