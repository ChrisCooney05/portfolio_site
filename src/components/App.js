import React, { Component } from "react";
import Intro from "./Intro/Intro";
import AboutMe from "./AboutMe/AboutMe";
import ProjectList from "./ProjectList/ProjectList";
import "tachyons";
import "animate.css";

class App extends Component {
  render() {
    return (
      <div className="pa3 pa4-ns">
        <Intro />
        <br />
        <br />
        <AboutMe />
        <br />
        <ProjectList />
      </div>
    );
  }
}

export default App;
