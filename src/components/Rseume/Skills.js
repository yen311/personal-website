import React from "react";
import "./Skills.css";

function Skills(props) {
  let filterSkill = [];
  for (let skill of props.data) {
    if (props.currentStatus === "All") {
      filterSkill.push(skill);
    } else {
      if (props.currentStatus === skill.group) {
        filterSkill.push(skill);
      }
    }
  }
  return (
    <div>
      {filterSkill.map((skill, index) => (
        <div className={`${skill.group} skill-bar`} key={index}>
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
