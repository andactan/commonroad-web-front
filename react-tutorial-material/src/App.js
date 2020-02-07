import React, { Component } from 'react'
import Scenarios from './pages/scenarios';
import Submissions from './pages/submissions';
import BenchmarkRanking from './pages/benchmark-ranking';
import SimpleSlider from './pages/index';
import SubmissionDetails from './pages/submission-details';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path='/scenarios' component={Scenarios}></Route>
          <Route exact path='/submissions' component={Submissions}></Route>
          <Route exact path='/submissions/ranking/:benchmarkID' component={BenchmarkRanking}></Route>
          <Route exact path='/' component={SimpleSlider}></Route>
          <Route exact path="/submission_details" component={SubmissionDetails}></Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;