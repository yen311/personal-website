import React from "react";
import Card from "react-bootstrap/Card";
import { BaseURL } from "../../utils/config";
import { useHistory } from "react-router-dom";

function ProjectCard({ data }) {
  const history = useHistory();
  const changeLocHandler = (e, loc) => {
    history.push(`/portfolio${loc}`);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src={BaseURL + data.img} />
      <Card.Body>
        <Card.Title>{data.dropdownName}</Card.Title>
        {data.descriptions.map((item, index) => {
          return <Card.Text key={index}>{item}</Card.Text>;
        })}
        <div className='d-flex justify-content-between align-items-baseline'>
          <a className='text-muted' href={data.githubUrl} target='_blank'>
            Go to source code
          </a>
          <button className='btn btn-outline-success' onClick={(event) => changeLocHandler(event, data.path)}>
            More Detail
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
