import './App.css';
import './headerstyle.css';
import BallotMeasure from "./ballotmeasures/BallotMeasure.js";
import BmPage from "./bmlearnmore/BmPage.js";
import Proposal1 from "./bmlearnmore/Proposal1.js";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h3 className="timer"> (countdown timer goes here)</h3>
      <h1 className="thedownballot" >THE DOWNBALLOT</h1>
      <h1 className="nyccouncil" >NYC Council Election</h1>
      <Router>
        <Switch>
          <Route path="/ballotmeasures/newyorkproposal1">
            <Proposal1 />
          </Route>
          <Route path="/ballotmeasures/newyorkproposal2">
            <h1>proposal 2</h1>
          </Route>
          <Route path="/idk">
            <br />
            <br />
            <h1>idk where this goes</h1>
          </Route>
          <Route path="/ballotmeasures">
            <BmPage />
          </Route>
          <Route path="/">
            <div className="randombox">
              <div id="dummy"></div>
            </div>
            <BallotMeasure />
            <div className="randombox">
              <div id="dummy"></div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
