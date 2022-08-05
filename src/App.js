import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Redirect, HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About_Me";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import ProjectPage from "./Pages/PorjectPage";
import Contact from "./Pages/Contact";
import { AnimatePresence } from "framer-motion";
import ScrollUp from "./components/UI/ScrollUp";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useState, useEffect } from "react";
import { BaseURL } from "./utils/config";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // resume
    fetch(`${BaseURL}/api/project/`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, [setProjects]);
  return (
    <div className='App'>
      <HashRouter>
        <ScrollUp />
        <Navbar projects={projects} />
        <AnimatePresence>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/home' />
            </Route>
            <Route path='/home' exact component={Home} />
            <Route path='/about me' exact component={About} />
            <Route path='/resume' exact component={Resume} />
            <Route path='/portfolio' exact render={(props) => <Portfolio {...props} projects={projects} />} />
            <Route path='/contact' exact component={Contact} />
            {projects.map((project, key) => {
              return (
                <Route
                  key={key}
                  path={`/portfolio${project.path}`}
                  exact
                  render={(props) => <ProjectPage {...props} data={project} />}
                />
              );
            })}
          </Switch>
        </AnimatePresence>
      </HashRouter>
    </div>
  );
}

export default App;
