import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="projectItem">
      <div className="project-top">
        <p className="project-name">
          <a className="project-link link" href={props.data.link}>
            {props.data.name}
          </a>
        </p>
        <p className="project-year">{props.data.year}</p>
      </div>
      <div
        className="project-down"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <p className="project-description">{props.data.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
