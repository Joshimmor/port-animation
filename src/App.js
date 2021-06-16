import './App.scss';
import Home from "./Home.js";
import Landing from './Landing/Landing';
import Nav from "./Nav.js";
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
             <div>
               hello
             </div>
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
