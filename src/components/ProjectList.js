import React, { Component } from 'react'
import Project from './Project'
import projectArray from '../project_json'
import Fade from 'react-reveal/Fade'


class ProjectList extends Component {
  render() {
    const projectList = projectArray.map((project, i) => {
      return (
        <Fade bottom delay={5000}>
          <Project key={i} title={project.title} description={project.description} />
        </Fade >
      );
    })
    return <div className='tc'>{projectList}</div>
  }
}

export default ProjectList