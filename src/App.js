import './App.scss';
import Home from "./Home.js";
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
