import React from "react";
import "./SkillsButton.css";
import { useDispatch } from "react-redux";
import { skillAction } from "../../store/skillSlice";

function SkillButton(props) {
  const dispatch = useDispatch();
  const filterWebHandler = () => {
    dispatch(skillAction.findWebSkills());
  };
  const filterSoftwareHander = () => {
    dispatch(skillAction.findSoftWareSkills());
  };
  const filterDataHander = () => {
    dispatch(skillAction.findDataSkills());
  };
  const filterAllHander = () => {
    dispatch(skillAction.findAllSkills());
  };
  const filterSoftSkillHandler = () => {
    dispatch(skillAction.findSoftSkills());
  };
  const filterOtherSkillHandler = () => {
    dispatch(skillAction.findOtherSkills());
  };
  return (
    <>
      <h3 className="h3-title">
        Skills{" "}
        <span>I will try my best to be honest on rating my skills 😆</span>
      </h3>
      <div>
        <button className="about-link" onClick={filterAllHander}>
          All
        </button>
        <button className="about-link" onClick={filterSoftwareHander}>
          Software Development
        </button>
        <button className="about-link" onClick={filterDataHander}>
          Data
        </button>
        <button className="about-link" onClick={filterWebHandler}>
          Web Development
        </button>
        <button className="about-link" onClick={filterSoftSkillHandler}>
          Soft Skills
        </button>
        <button className="about-link" onClick={filterOtherSkillHandler}>
          Others
        </button>
      </div>
    </>
  );
}

export default SkillButton;
