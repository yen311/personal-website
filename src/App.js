import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  Redirect,
  HashRouter,
  Router,
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About_Me";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import { AnimatePresence } from "framer-motion";
import ScrollUp from "./components/UI/ScrollUp";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <ScrollUp />
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/home' />
            </Route>
            <Route path='/home' exact component={Home} />
            <Route path='/about me' exact component={About} />
            <Route path='/resume' exact component={Resume} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
        </AnimatePresence>
      </HashRouter>
    </div>
  );
}

export default App;
