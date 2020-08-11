import React, { Component } from 'react'
import '../intro.css'
import 'animate.css'

class Intro extends Component {
  render() {
    const fadeLeft = 'animate__animated animate__fadeInLeft green'
    return (
      <div className='pa3 pa4-ns'>
        <div className={fadeLeft}>
          Hi There, I'm Chris<br />
          A Full-Stack Developer
        </div>
      </div>
    );
  }
}

export default Intro;