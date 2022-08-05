import React from "react";
import Card from "../UI/Card";

function ProjectContent({ data }) {
  return (
    <Card className='card-center'>
      <div className='card-top'>
        <h1>{data.dropdownName}</h1>
        <p className='card-top-p'>{data.name}</p>
      </div>
      <div className='card-bottom'></div>
    </Card>
  );
}

export default ProjectContent;
