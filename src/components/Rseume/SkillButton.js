import React, { useState, useEffect } from "react";
import "./SkillsButton.css";

function SkillButton(props) {
  const [status, setStatus] = useState("All");
  const { passData } = props;
  useEffect(() => {
    passData(status);
  }, [status, passData]);

  const allHandler = (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "All":
        setStatus("All");
        break;
      case "Software Development":
        setStatus("Software");
        break;
      case "Data":
        setStatus("Data");
        break;
      case "Web Development":
        setStatus("Web");
        break;
      default:
        setStatus("All");
    }
  };

  return (
    <>
      <h3 className="h3-title">Skills</h3>
      <div>
        <button className="about-link" onClick={allHandler}>
          All
        </button>
        <button className="about-link" onClick={allHandler}>
          Software Development
        </button>
        <button className="about-link" onClick={allHandler}>
          Data
        </button>
        <button className="about-link" onClick={allHandler}>
          Web Development
        </button>
      </div>
    </>
  );
}

export default SkillButton;
