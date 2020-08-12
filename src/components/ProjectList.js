import React, { Component } from 'react'
import Project from './Project'
import projectArray from '../project_json'


class ProjectList extends Component {
  render() {
    const projectList = projectArray.map((project, i) => {
      return (
        <Project key={i} title={project.title} description={project.description} link={project.link} />
      );
    })
    return <div className='tc flex flex-wrap animate__animated animate__fadeIn animate__delay-4s'>{projectList}</div>
  }
}

export default ProjectList