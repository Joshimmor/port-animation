import './App.scss';
import Home from "./Home.js";
import Nav from "./Nav.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
      <Switch>  
        <Route path="">
             <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
