import React, { Component } from 'react';
import Intro from './Intro'
import AboutMe from './AboutMe'
import 'tachyons'
import 'animate.css'

class App extends Component {
  render() {
    return (
      <div className='pa3 pa4-ns'>
        <Intro /><br />
        <AboutMe />
      </div>
    );
  }
}


export default App;
