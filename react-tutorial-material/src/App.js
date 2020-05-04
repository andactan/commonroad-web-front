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

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import './css/app.css'
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

import Registration from './pages/registration';
import FileUpload from './components/file-upload';
import NewSubmission from './pages/new-submission';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Router>
      <div>
        <Switch>
          <Route exact path='/scenarios' component={Scenarios}></Route>
          <Route exact path='/submissions' component={Submissions}></Route>
          <Route exact path='/submissions/ranking/:benchmarkID' component={BenchmarkRanking}></Route>
          <Route exact path='/' component={SimpleSlider}></Route>
          <Route exact path="/submissions/:id/details" component={SubmissionDetails}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/register" component={Registration}></Route>
          <Route exact path="/submissions/new" component={NewSubmission}></Route>
          <Route exact path="/develop" component={FileUpload}></Route>
        </Switch>
        </div>
      </Router>
      </ThemeProvider>
    );
  }
}

export default App;