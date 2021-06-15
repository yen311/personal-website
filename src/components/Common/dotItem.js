import React from "react";

function dotItem(props) {
  const className = props.className;
  return <li className={`listItem ${className}`}>{props.children}</li>;
}

export default dotItem;
