import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Switch>
            <Route path="/" exact></Route>
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
