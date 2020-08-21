import React, { Component } from "react";
import styled from "@emotion/styled/macro";

class Project extends Component {
  render() {
    const { title, description, link, img } = this.props;
    console.log(img);
    const DisplayOver = styled.div({
      height: "100%",
      left: "0",
      position: "absolute",
      top: "0",
      width: "100%",
      zIndex: 2,
      transition: "background-color 350ms ease",
      backgroundColor: "transparent",
      padding: "20px 20px 0 20px",
      boxSizing: "border-box",
    });

    const Hover = styled.div({
      opacity: 0,
      transition: "opacity 350ms ease",
    });

    const Paragraph = styled.p({
      transform: "translate3d(0,50px,0)",
      transition: "transform 350ms ease",
    });

    const Background = styled.div({
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "#FFF",
      position: "relative",
      width: "500px",
      height: "350px",
      cursor: "pointer",
      backgroundImage: `url(${img})`,
      [`:hover ${DisplayOver}`]: {
        backgroundColor: "rgba(0,0,0,0.9)",
      },
      [`:hover ${Paragraph}`]: {
        transform: "translate3d(0,0,0)",
      },
      [`:hover ${Hover}`]: {
        opacity: 1,
      },
    });

    return (
      <a
        href={link}
        className="no-underline black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Background className="br4 ma2">
          <DisplayOver className="br4">
            <Hover>
              <Paragraph>
                <span className="f1 b green">{title}</span>
                <p className="f3 white">{description}</p>
              </Paragraph>
            </Hover>
          </DisplayOver>
        </Background>
      </a>
    );
  }
}

export default Project;
