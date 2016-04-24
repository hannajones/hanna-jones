import React from 'react'
import Project from './Project'
import Card from './Card'

// projects state can probably live here instead

class ProjectsContainer extends React.Component {
  constructor() {
    super()
    this.renderCards = this.renderCards.bind(this)
  }
  renderCards(key) {
    return <Card key={key} index={key} project={this.props.projects[key]} />
  }
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <ul>
          {Object.keys(this.props.projects).map(this.renderCards)}
        </ul>
        <button onClick={this.props.loadSamples}>Load Projects</button>
      </div>
    )
  }
}

export default ProjectsContainer