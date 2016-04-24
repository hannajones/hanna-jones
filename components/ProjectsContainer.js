import React from 'react'
import Project from './Project'

// projects state can probably live here instead

class ProjectsContainer extends React.Component {
  constructor() {
    super()
    this.renderProjects = this.renderProjects.bind(this)
  }
  renderProjects(key) {
    return <Project key={key} index={key} data={this.props.projects[key]} />
  }
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <ul>
          {Object.keys(this.props.projects).map(this.renderProjects)}
        </ul>
        <button onClick={this.props.loadSamples}>Load Projects</button>
      </div>
    )
  }
}

export default ProjectsContainer