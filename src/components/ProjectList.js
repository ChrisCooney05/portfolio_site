import React, { Component } from 'react'
import Project from './Project'
import projectArray from '../project_json'


class ProjectList extends Component {
  render() {
    const projectList = projectArray.map((project, i) => {
      return (
        <Project key={i} title={project.title} description={project.description} />
      );
    })
    return <div className='tc'>{projectList}</div>
  }
}

export default ProjectList