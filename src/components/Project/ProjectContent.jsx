import React from "react";
import Card from "../UI/Card";
import Badge from "react-bootstrap/Badge";

function ProjectContent({ data }) {
  return (
    <Card className='card-center'>
      <div className='card-top'>
        <h1>{data.dropdownName}</h1>
        <div className='d-flex justify-content-between'>
          <p className='card-top-p'>{data.name}</p>
          <p className='card-top-p'>{data.date}</p>
        </div>
      </div>
      <div className='card-bottom'>
        <h3 className='mb-3'>Project Brief Summary</h3>
        <p>{data.detail}123</p>
        <h3 className='mb-3 mt-5'>Project Key Features</h3>
        {data.descriptions.map((item, key) => {
          return <p key={key}>{item}</p>;
        })}
        <h3 className='mb-3 mt-5'>Project Tech Stack</h3>
        {data.techStacks.map((item, key) => {
          return (
            <Badge bg='secondary me-2' key={key}>
              {item}
            </Badge>
          );
        })}
        <h3 className='mb-3 mt-5'>Project Gallery</h3>
        <p>I need some photos at here</p>
        <div className='d-flex justify-content-center mb-3 mt-5'>
          {data.url ? (
            <button
              className='btn btn-outline-success mx-2 w-25'
              onClick={() => {
                console.log(0.1 + 0.2);
                window.open(data.url, "_blank");
              }}
            >
              Take me to project page
            </button>
          ) : (
            <button className='btn btn-outline-secondary mx-2 w-25' disabled>
              Project page not available
            </button>
          )}
          {data.githubUrl ? (
            <button
              className='btn btn-outline-success mx-2 w-25'
              onClick={() => {
                window.open(data.githubUrl, "_blank");
              }}
            >
              Take me to github source page
            </button>
          ) : (
            <button className='btn btn-outline-secondary mx-2 w-25' disabled>
              Github page not available
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ProjectContent;
