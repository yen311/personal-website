import React from "react";
import "./Skills.css";
import { useSelector } from "react-redux";

function Skills() {
  const items = useSelector((state) => state.skill.skills);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="skill-bar">
          <div className={`title _${item.percentage} ${item.group}`}>
            {" "}
            {item.name}
          </div>
          <div className="percentage">{item.percentage}/5</div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
