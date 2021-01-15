import React from "react";
import image from "../assets/me.png";

const AboutMe = () => {
  return (
    <div className="tc animate__animated animate__fadeIn animate__delay-3s">
      <h3 className="f2 b">About Me</h3>
      <p className="tl dib pa3 f5 fw6">
        Thanks for popping in and checking out my portfolio!
        <br />
        <br />
        Before making this site I was a Key account manager with a packaging
        company, before that <br />
        I have had many a job, from retail management to personal trainer. I've
        never really <br />
        known what I wanted to do until one day on the train I started playing
        with a 'Learn to code' <br />
        app. This sparked something in me, so much so that I decided to make a
        career of it! I took part in a 12 week <br />
        coding bootcamp with a company called makers and now here I am, a full
        stack dev with a shiny website.
        <br />
        A bit further down you can see a few of my projects, but you can also
        visit my github to checkout my code!
        <br />
        <br />
        I would love to hear from you, so drop me a message via email or
        linkedIn.
        <br />
        <br />
        <div className="flex">
          <a
            className="w-25 pa3 mr2 f6 link dim br2 ba bw1 ph3 pv2 mb2 dib black"
            href="https://github.com/ChrisCooney05"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="w-25 pa3 mr2 f6 link dim br2 ba bw1 ph3 pv2 mb2 dib black"
            href="https://www.linkedin.com/in/chris-cooney-003028160/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="w-25 pa3 mr2 f6 link dim br2 ba bw1 ph3 pv2 mb2 dib black"
            href="mailto:chris.cooney05@hotmail.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </a>
        </div>
      </p>
      <img
        src={image}
        alt="myImage"
        width="200px"
        className="bw2 shadow-5 br3"
      />
    </div>
  );
};

export default AboutMe;
