import React from "react";

function ProjectItem(props) {
  return (
    <>
      <h4>{props.data.Title}</h4>
      {props.data.Descriptions.map((descriptions, index) => (
        <p key={index} className="card-bottom-p">
          {descriptions}
        </p>
      ))}
    </>
  );
}

export default ProjectItem;
