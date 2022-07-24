import React from "react";

function Course(props) {
  return (
    <span className='text-muted'>
      {props.data.code}
      <a className='text-reset ms-3' href={props.data.url}>
        {props.data.name}
      </a>
    </span>
  );
}

export default Course;
