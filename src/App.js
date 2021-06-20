import './App.scss';
import Landing from './Landing/Landing';
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
        <Route  exact path="/">
             <Landing/>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
