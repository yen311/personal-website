import React, { useState, useEffect } from "react";
import "./SkillsButton.css";

function SkillButton(props) {
  const [status, setStatus] = useState("All");

  useEffect(() => {
    props.passData(status);
  }, [status, props]);

  const allHandler = () => {
    setStatus("All");
  };
  const webHandler = () => {
    setStatus("Web");
  };
  const softwareHandler = () => {
    setStatus("Software");
  };
  const dataHandler = () => {
    setStatus("Data");
  };

  return (
    <>
      <h3 className="h3-title">Skills</h3>
      <div>
        <button className="about-link" onClick={allHandler}>
          All
        </button>
        <button className="about-link" onClick={softwareHandler}>
          Software Development
        </button>
        <button className="about-link" onClick={dataHandler}>
          Data
        </button>
        <button className="about-link" onClick={webHandler}>
          Web Development
        </button>
      </div>
    </>
  );
}

export default SkillButton;
