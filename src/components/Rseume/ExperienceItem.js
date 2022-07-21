import React from "react";
import Badge from "react-bootstrap/Badge";

function ExperienceItem(props) {
  let item = <></>;
  if (props.data.startDate) {
    let startDateArr = props.data.startDate.split("-");
    let endDateArr = props.data.endDate.split("-");

    if (props.type === "educations") {
      item = (
        <div className='my-4'>
          <div className='row'>
            <h4 className='col'>{props.data.name}</h4>
            <h6 className='col-2 text-center'>
              {props.data.city}, {props.data.country}
            </h6>
            <h6 className='col-3 text-end'>
              {`${startDateArr[0]}/${startDateArr[1]}`} -{" "}
              {`${endDateArr[0]}/${endDateArr[1]}`}
            </h6>
          </div>
          <div className='row'>
            <h6 className='col'>{props.data.major}</h6>
            {props.data.descriptions
              ? props.data.descriptions.map((item, key) => {
                  return (
                    <h6 className='text-muted' key={key}>
                      {item}
                    </h6>
                  );
                })
              : ""}
          </div>
        </div>
      );
    }
    if (props.type === "works") {
      item = (
        <div className='my-4'>
          <div className='row'>
            <h4 className='col'>{props.data.company}</h4>
            <h6 className='col-2 text-center'>
              {props.data.city}, {props.data.country}
            </h6>
            <h6 className='col-3 text-end'>
              {props.data.company === "jtwo solutions"
                ? `${startDateArr[0]}/${startDateArr[1]} - Present`
                : `${startDateArr[0]}/${startDateArr[1]} - ${endDateArr[0]}/${endDateArr[1]}`}
            </h6>
          </div>
          <div className='row'>
            <h6 className='col'>{props.data.position}</h6>
            {props.data.descriptions
              ? props.data.descriptions.map((item, key) => {
                  return (
                    <li className='text-muted' key={key}>
                      {item}
                    </li>
                  );
                })
              : ""}
          </div>
        </div>
      );
    }
  }
  if (props.type === "projects") {
    item = (
      <div className='my-4'>
        <div className='row'>
          <h4 className='col'>{props.data.name}</h4>
          <h6 className='col-3 text-end'>{props.data.date}</h6>
        </div>
        <div className='d-flex'>
          {props.data.techStacks.map((item, key) => {
            return (
              <Badge key={key} bg='secondary' className='me-2'>
                {item}
              </Badge>
            );
          })}
        </div>
        <div className='row'>
          <h6 className='col'>{props.data.position}</h6>
          {props.data.descriptions
            ? props.data.descriptions.map((item, key) => {
                return (
                  <li className='text-muted' key={key}>
                    {item}
                  </li>
                );
              })
            : ""}
        </div>
      </div>
    );
  }
  return item;
}

export default ExperienceItem;
