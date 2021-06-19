import './App.scss';
import Home from "./Home.js";
import Landing from './Landing/Landing';
import Nav from "./Nav.js";
import Projects from "./Projects/Projects"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>  
      <Route path="/projects">
             <Projects/>
        </Route>
        <Route path="/">
             <Landing/>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
