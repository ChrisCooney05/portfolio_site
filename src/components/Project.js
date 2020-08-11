import React, { Component } from 'react'

class Project extends Component {
  render() {
    const { title, description } = this.props
    return (
      <div className='tc dib br3 pa5 ma2 grow bw2 shadow-5 w-two-thirds pa2'>
        {title}<br /><br />
        {description}<br />
      </div>
    );
  }
}

export default Project;