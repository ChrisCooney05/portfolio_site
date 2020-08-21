import React, { Component } from "react";
import styled from "@emotion/styled/macro";

class Project extends Component {
  render() {
    const { title, description, link, img } = this.props;
    console.log(img);
    const Background = styled.div({
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "#FFF",
      position: "relative",
      width: "500px",
      height: "350px",
      cursor: "pointer",
      backgroundImage: `url(${img})`,
    });
    return (
      <Background>
        <a
          href={link}
          className="no-underline black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="f2 b green">{title}</span>
          <p>{description}</p>
        </a>
      </Background>
    );
  }
}

export default Project;
