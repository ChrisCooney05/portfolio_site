import React, { Component } from 'react'

class Intro extends Component {
  render() {
    return (
      <div >
        <span className='animate__animated animate__fadeIn green f-headline ma4 b'>Hi There,</span> <br />
        <span className='animate__animated animate__fadeIn animate__delay-1s green f-headline ma4 b'>I'm Chris</span><br />
        <span className='animate__animated animate__fadeIn animate__delay-2s green f-headline ma4 b'>A Full-Stack Developer</span>
      </div>
    );
  }
}

export default Intro;