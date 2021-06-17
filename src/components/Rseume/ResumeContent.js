import React from "react";
import Card from "../UI/Card";
import ResumeItem from "./ResumeItem";

const ANU = {
  Name: "The Australian National Univessity",
  Loc: "Canberra, Australia",
  Interval: "02/2020 - 11/2021 (Expected)",
};
const PSU = {
  Name: "Portland State University",
  Loc: "Portland, USA",
  Interval: "08/2017 - 06/2019",
};

const FedEx = {
  Name: "FedEx",
  Loc: "Taipei, Taiwan",
  Interval: "09/2019 - 10/2019",
};

const Fubon = {
  Name: "Fubon Life Insurance Co., Ltd.",
  Loc: "Taipei, Taiwan",
  Interval: "05/2017 - 06/2017",
};

function ResumeContent() {
  return (
    <Card className="card-center">
      <div className="card-top">
        <h1>Resume</h1>
      </div>
      <div className="card-bottom">
        <h3 className="h3-title">Education</h3>
        <ResumeItem data={ANU} />
        <p className="card-bottom-p">Master of Computing</p>
        <ResumeItem data={PSU} />
        <p className="card-bottom-p">
          Bachelor of Business Administration: Finance
        </p>
        <p className="card-bottom-p">Cumulative GPA 3.61 ; Major GPA 3.79</p>
        <h3 className="h3-title">Project Experience</h3>
        <h4>Building a simple and responsive personal website</h4>
        <p className="card-bottom-p">
          Developing the website by react framework with mordern JavaScript
        </p>
        <p className="card-bottom-p">
          Yeah, that's right. It's the website which you browsing rn :D.
        </p>
        <h4>
          Building interactive website for ANU's graduate house residents
          (Ongoing)
        </h4>
        <p className="card-bottom-p">Developing the webite by Drupal.</p>
        <p className="card-bottom-p">
          Analyzed stakeholder's requirement by user story map.
        </p>
        <p className="card-bottom-p">
          Basic wirefram prototyping by HTML, CSS and JS.
        </p>
        <h4>Built simple food search engine-based APP (2020 Semester 1)</h4>
        <p className="card-bottom-p">
          Parsing user query and show relevant results.
        </p>
        <p className="card-bottom-p">
          Using red-black trees an HashSets for organizing, processing,
          retrieving, and storing data.
        </p>
        <p className="card-bottom-p">
          Support for different size of device and orientation.
        </p>
        <p className="card-bottom-p">
          Practiced in the design and implementation of a GUI application along
          with the use of several implement tools such as Android Studio and Git
        </p>
        <h4>Built simple board game by Java (2020 Semester 1)</h4>
        <p className="card-bottom-p">
          Utilized version control tools like Git to collaboratively work on a
          board game with my team.
        </p>
        <p className="card-bottom-p">
          Designed graphical interface of the game and implemented the design
          with JavaFX.
        </p>
        <p className="card-bottom-p">
          Achieved the basic function of the game like placement validation,
          score calculation, etc.
        </p>
        <p className="card-bottom-p">
          Created simple computer opponents of the game.
        </p>
        <h4>
          Built lake’s data model and analyzed by Python (2020 Semester 1)
        </h4>
        <p className="card-bottom-p">
          Visualized data from csv files using matplotlib.
        </p>
        <p className="card-bottom-p">
          Made various assumptions and analyzed the difference between them.
        </p>
        <p className="card-bottom-p">
          Utilized mean square error method to find out the model error and
          determined which model is more suitable.
        </p>
        <h3 className="h3-title">Work Experience</h3>
        <ResumeItem data={FedEx} />
        <p>Customer Financial Service administrator</p>
        <p className="card-bottom-p">
          Arranged documents and assisted supervisor
        </p>
        <p className="card-bottom-p">
          Communicated and Cooperated with the team located in Wuhan, China{" "}
        </p>
        <p className="card-bottom-p">Handled financial issues for customers</p>
        <ResumeItem data={Fubon} />
        <p className="card-bottom-p">
          Arranged documents and assisted supervisor
        </p>
        <p className="card-bottom-p">
          Informed and made appointment with the interview candidate’s
        </p>
        <h3 className="h3-title">Skills</h3>
      </div>
    </Card>
  );
}

export default ResumeContent;
