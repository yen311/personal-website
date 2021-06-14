import "./Card.css";

import React from "react";

function Card(props) {
  return <div className={`Card +${props.className}`}>{props.children}</div>;
}

export default Card;
