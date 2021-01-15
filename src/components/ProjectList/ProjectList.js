import React from "react";
import Project from "../Project/Project";
import { projectArray } from "../../projectJson";

const ProjectList = () => {
  const projectList = projectArray.map((project, i) => {
    return (
      <Project
        key={i}
        title={project.title}
        description={project.description}
        link={project.link}
        img={project.img}
      />
    );
  });
  return (
    <div className="animate__animated animate__fadeIn animate__delay-4s tc">
      <p className="f2 b tc">Projects</p>
      <div className="flex flex-wrap justify-center">{projectList}</div>
    </div>
  );
};

export default ProjectList;
