import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import ExperienceItem from "./ExperienceItem";
import Skills from "./Skills";
import SkillButton from "./SkillButton";
import Course from "./Course";
import CourseData from "../../data/CourseData";
import { useEffect } from "react";
import { FaGraduationCap, FaBlackTie, FaCode } from "react-icons/fa";
import LoadingSpinner from "../Common/LoadingSpinner";
import { useInView } from "react-intersection-observer";
import Alert from "react-bootstrap/Alert";

const types = [
  { name: "All", value: "All" },
  { name: "Software Development", value: "Software" },
  { name: "Data", value: "Data" },
  { name: "Tools", value: "Tool" },
  { name: "SoftSkill", value: "SoftSkill" },
];

function ResumeContent() {
  const [isFetching, setIsFetching] = useState(true);
  const [isFetching1, setIsFetching1] = useState(true);
  const [educations, setEducations] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const [btnValue, setBtnValue] = useState("All");

  useEffect(() => {
    fetch("https://yen-website-api.herokuapp.com/api/resume/")
      .then((response) => response.json())
      .then((data) => {
        setIsFetching(false);
        setEducations(data.educations);
        setWorkExperience(data.workExperience);
        setProjects(data.projects);
      });
  }, []);

  useEffect(() => {
    setIsFetching1(true);
    fetch("http://127.0.0.1:7000/api/skill/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: btnValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsFetching1(false);
        setSkills(data.skills);
      })
      .catch(() => {
        setIsFetching1(false);
        setSkills(null);
      });
  }, [btnValue]);

  return (
    <Card className='card-center'>
      <div className='card-top'>
        <h1>Resume</h1>
        <p className='card-top-p'>My past experience</p>
      </div>
      <div className='card-bottom'>
        <h3 className='mb-3'>
          <span className='sub-title py-2'>Education</span>
          <FaGraduationCap className='mx-2' />
        </h3>
        {isFetching ? (
          <LoadingSpinner>Loading</LoadingSpinner>
        ) : (
          educations.map((item, key) => {
            return <ExperienceItem key={key} data={item} type='educations' />;
          })
        )}

        <h3 className='mb-3'>
          <span className='sub-title py-2'>Work Experience</span>
          <FaBlackTie className='mx-2' />
        </h3>
        {isFetching ? (
          <LoadingSpinner>Loading</LoadingSpinner>
        ) : (
          workExperience.map((item, key) => {
            return <ExperienceItem key={key} data={item} type='works' />;
          })
        )}
        <h3>
          <span className='sub-title py-2'>Project Experience</span>
          <FaCode className='mx-2' />
        </h3>
        <div className='mb-3'>
          <span className='text-muted'>
            Link for all project source code can be found in{" "}
            <Link to='./portfolio' className='link'>
              Portfolio
            </Link>{" "}
            section
          </span>
        </div>
        {isFetching ? (
          <LoadingSpinner>Loading</LoadingSpinner>
        ) : (
          projects.map((item, key) => {
            return <ExperienceItem key={key} data={item} type='projects' />;
          })
        )}
      </div>
      <SkillButton
        types={types}
        btnValue={btnValue}
        setBtnValue={setBtnValue}
        loading={isFetching1}
      />
      {isFetching1 ? (
        <LoadingSpinner>Loading</LoadingSpinner>
      ) : skills !== null ? (
        <div ref={ref}>
          {skills.map((item, key) => {
            return (
              <Skills
                done={item.percentage}
                inView={inView}
                key={key}
                type={item.type}
              >
                {item.name}
              </Skills>
            );
          })}
        </div>
      ) : (
        <Alert key='danger' variant='danger'>
          Error
        </Alert>
      )}
      <Course data={CourseData} />
    </Card>
  );
}

export default ResumeContent;
