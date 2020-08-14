import React, { Component } from 'react'
import Project from './Project'
import projectArray from '../projectJson'


class ProjectList extends Component {
  render() {
    const projectList = projectArray.map((project, i) => {
      return (
        <Project key={i} title={project.title} description={project.description} link={project.link} />
      );
    })
    return (
      <div className='animate__animated animate__fadeIn animate__delay-4s'>
        <p className='f2 b tc'>Projects</p>
        <div className='tc flex flex-wrap'>
          {projectList}
        </div>
      </div>
    )
  }
}

export default ProjectList