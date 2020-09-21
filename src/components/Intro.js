import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div className="mh5-ns">
        <h1 className="animate__animated animate__fadeIn green f-headline ma1 b">
          Hi There
        </h1>

        <h1 className="animate__animated animate__fadeIn animate__delay-1s green f-headline ma1 b">
          I'm Chris
        </h1>

        <h1 className="animate__animated animate__fadeIn animate__delay-2s green f-headline ma1 b">
          A Full Stack Developer
        </h1>
      </div>
    );
  }
}

export default Intro;
