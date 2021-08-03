import React from "react";
import "./ExperienceItem.css";

function ExperienceItem(props) {
  return (
    <>
      <div className="flex">
        <h4>{props.data.Name}</h4>
        <p>{props.data.Loc}</p>
        <p>{props.data.Interval}</p>
      </div>
      {props.data.Position && <p>{props.data.Position}</p>}
      {props.data.Descriptions.map((description, index) => (
        <p key={index} className="card-bottom-p">
          {description}
        </p>
      ))}
    </>
  );
}

export default ExperienceItem;
