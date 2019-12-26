import React, { Component } from 'react'
import NavBar from './navbar';
import Footer from './footer';
import RangeSlider from './range-slider';
import Scenarios from './scenarios';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar></NavBar>
      <Scenarios></Scenarios>
      </React.Fragment>


    )
  }
}

export default App