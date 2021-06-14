import "./Card.css";

import React from "react";

function Card(props) {
  const className = "card " + props.className;
  return <div className={className}>{props.children}</div>;
}

export default Card;
