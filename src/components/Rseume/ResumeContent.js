import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import ExperienceItem from "./ExperienceItem";
import Skills from "./Skills";
import SkillButton from "./SkillButton";
import Course from "./Course";
import { FaGraduationCap, FaBlackTie, FaCode, FaCertificate, FaBookReader } from "react-icons/fa";
import LoadingSpinner from "../Common/LoadingSpinner";
import { useInView } from "react-intersection-observer";
import Alert from "react-bootstrap/Alert";
import useScript from "../Hooks/useScript";
import { BaseURL } from "../../utils/config";

const types = [
  { name: "All", value: "All" },
  { name: "Software Development", value: "Software" },
  { name: "Data", value: "Data" },
  { name: "Tools", value: "Tool" },
  { name: "SoftSkill", value: "SoftSkill" },
];

function ResumeContent() {
  const [isFetchingResume, setIsFetchingResume] = useState(true);
  const [isFetchingSkill, setIsFetchingSkill] = useState(true);
  const [isFetchingCourse, setIsFetchingCourse] = useState(true);
  const [educations, setEducations] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [courses, setCourses] = useState([]);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const [btnValue, setBtnValue] = useState("All");
  useScript(`https://cdn.credly.com/assets/utilities/embed.js`);

  useEffect(() => {
    // resume
    fetch(`${BaseURL}/api/resume/`)
      .then((response) => response.json())
      .then((data) => {
        setIsFetchingResume(false);
        setEducations(data.educations);
        setWorkExperience(data.workExperience);
        setProjects(data.projects);
      });
    // course
    fetch(`${BaseURL}/api/course/`)
      .then((response) => response.json())
      .then((data) => {
        setIsFetchingCourse(false);
        setCourses(data.courses);
      });
  }, [setIsFetchingResume, setEducations, setWorkExperience, setProjects, setIsFetchingCourse, setCourses]);

  useEffect(() => {
    setIsFetchingSkill(true);
    fetch(`${BaseURL}/api/skill/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: btnValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsFetchingSkill(false);
        setSkills(data.skills);
      })
      .catch(() => {
        setIsFetchingSkill(false);
        setSkills(null);
      });
  }, [btnValue, setIsFetchingSkill, setSkills]);

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
        {isFetchingResume ? (
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
        {isFetchingResume ? (
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
        {isFetchingResume ? (
          <LoadingSpinner>Loading</LoadingSpinner>
        ) : (
          projects.map((item, key) => {
            return <ExperienceItem key={key} data={item} type='projects' />;
          })
        )}
      </div>

      <SkillButton types={types} btnValue={btnValue} setBtnValue={setBtnValue} loading={isFetchingSkill} />
      {isFetchingSkill ? (
        <LoadingSpinner>Loading</LoadingSpinner>
      ) : skills !== null ? (
        <div ref={ref}>
          {skills.map((item, key) => {
            return (
              <Skills done={item.percentage} inView={inView} key={key} type={item.type}>
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
      <h3 className='my-3'>
        <span className='sub-title py-2'>Certificate</span>
        <FaCertificate className='mx-2' />
      </h3>
      <div
        data-iframe-width='270'
        data-iframe-height='270'
        data-share-badge-id='948aa351-269b-46d7-a63e-66c3e33f3ee9'
        data-share-badge-host='https://www.credly.com'
      />
      <h3 className='my-3'>
        Taken Courses
        <FaBookReader className='mx-2' />
      </h3>
      {isFetchingCourse ? (
        <LoadingSpinner>Loading</LoadingSpinner>
      ) : (
        courses.map((item, key) => {
          return <Course key={key} data={item} />;
        })
      )}
    </Card>
  );
}

export default ResumeContent;
