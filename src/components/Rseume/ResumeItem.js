import React from "react";
import "./ResumeItem.css";

function ResumeItem(props) {
  return (
    <div className="flex">
      <h4>{props.data.Name}</h4>
      <p>{props.data.Loc}</p>
      <p>{props.data.Interval}</p>
    </div>
  );
}

export default ResumeItem;
