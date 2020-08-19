import React, { Component } from "react";

class Project extends Component {
  render() {
    const { title, description, link } = this.props;
    return (
      <a
        href={link}
        className="tc dib br3 pa5 ma2 grow bw2 shadow-5 pa2 w-30 mr2 no-underline black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="f2 b green">{title}</span>
        <p>{description}</p>
      </a>
    );
  }
}

export default Project;
