import React from "react";
import "./Course.css";

function Course(props) {
  return (
    <>
      <h3 className="h3-title">Taken Courses</h3>
      {props.data.map((item, index) => (
        <span className="course" key={index}>
          {item.title}
          <a className="course-link" href={item.link}>
            {item.name}
          </a>
        </span>
      ))}
    </>
  );
}

export default Course;
