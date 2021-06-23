import React, { useState } from "react";
import Card from "../UI/Card";
import ExperienceItem from "./ExperienceItem";
import ProjectItem from "./ProjectItem";
import ExperienceData from "../../data/ExperienceData";
import ProjectExperienceData from "../../data/ProjectExperienceData";
import Skills from "./Skills";
import SkillButton from "./SkillButton";
import SkillData from "../../data/SkillsData";
import Course from "./Course";
import CourseData from "../../data/CourseData";

function ResumeContent() {
  const [currentStatus, setcurrentStatus] = useState("All");
  const dataHandler = (data) => {
    setcurrentStatus(data);
  };

  return (
    <Card className="card-center">
      <div className="card-top">
        <h1>Resume</h1>
        <p className="card-top-p">My past experience</p>
      </div>
      <div className="card-bottom">
        <h3 className="h3-title">Education</h3>
        <ExperienceItem data={ExperienceData.ANU} />
        <ExperienceItem data={ExperienceData.PSU} />
        <h3 className="h3-title">Project Experience</h3>
        <ProjectItem data={ProjectExperienceData.personalWebsite} />
        <ProjectItem data={ProjectExperienceData.ourCulture} />
        <ProjectItem data={ProjectExperienceData.WTFood} />
        <ProjectItem data={ProjectExperienceData.Metro} />
        <ProjectItem data={ProjectExperienceData.lakeData} />
        <h3 className="h3-title">Work Experience</h3>
        <ExperienceItem data={ExperienceData.FedEx} />
        <ExperienceItem data={ExperienceData.Fubon} />
      </div>
      <SkillButton passData={dataHandler} />
      <Skills data={SkillData} currentStatus={currentStatus} />
      <Course data={CourseData} />
    </Card>
  );
}

export default ResumeContent;
