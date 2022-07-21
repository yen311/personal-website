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
import SkillData from "../../data/SkillsData";

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
    fetch("https://yen-website-api.herokuapp.com/api/skill/")
      .then((response) => response.json())
      .then((data) => {
        setIsFetching1(false);
        setSkills(data.skills);
      });
  }, []);

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
      <SkillButton />
      {isFetching1 ? (
        <LoadingSpinner>Loading</LoadingSpinner>
      ) : (
        <div ref={ref}>
          {skills.map((item, key) => {
            return (
              <Skills done={item.percentage} inView={inView}>
                {item.name}
              </Skills>
            );
          })}
        </div>
      )}

      <Course data={CourseData} />
    </Card>
  );
}

export default ResumeContent;
