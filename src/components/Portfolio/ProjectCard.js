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
    <Card style={{ width: "18rem" }} className='me-4 mb-3'>
      <Card.Img variant='top' src={BaseURL + data.img} />
      <Card.Body>
        <Card.Title>{data.dropdownName}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{data.date}</Card.Subtitle>
        {/* {data.descriptions.map((item, index) => {
          return <Card.Text key={index}>{item}</Card.Text>;
        })} */}
        {data.url ? (
          <a className='text-muted' href={data.url} target='_blank'>
            Have a play with it
          </a>
        ) : (
          <a className='disable text-muted' disabled='disabled'>
            Not Available
          </a>
        )}
      </Card.Body>
      <Card.Footer>
        <div className='d-flex justify-content-between align-items-baseline'>
          <a className='text-muted' href={data.githubUrl} target='_blank'>
            Go to source code
          </a>
          <button className='btn btn-outline-success' onClick={(event) => changeLocHandler(event, data.path)}>
            More Detail
          </button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default ProjectCard;
