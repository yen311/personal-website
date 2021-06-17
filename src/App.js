import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About_Me";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import { AnimatePresence, Motion } from "framer-motion";
import ScrollUp from "./components/UI/ScrollUp";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollUp />
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route path="/personal-website" exact component={Home} />
            <Route path="/about me" exact component={About} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;