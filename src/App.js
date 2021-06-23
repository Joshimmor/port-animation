import './App.scss';
import Landing from './Landing/Landing';
import Projects from "./Projects/Projects";
import Portfolio from "./Portfolio/Portfolio";
import Shareity from "./Portfolio/Shareity";
import Playground from './3D Rendering/Playground';
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
        <Route path="/fairview">
             <Portfolio/>
        </Route>
        <Route path="/shareity">
             <Shareity/>
        </Route>
        <Route path="/test">
             <Playground/>
        </Route>
        <Route  exact path="/">
             <Landing/>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
