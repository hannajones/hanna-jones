import React from 'react'
import Project from './Project'
import Card from './Card'
import { Link } from 'react-router'

// projects state can probably live here instead

class ProjectsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: {}
    }
    this.renderCards = this.renderCards.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
  }
  componentWillMount() {
    console.log('mounting')
    this.loadSamples()
  }
  loadSamples() {
    this.setState({
      projects: require('../scripts/data.js')
    })
  }
  renderCards(key) {
    return <Card key={key} index={key} project={this.state.projects[key]} />
  }
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <ul>
          {Object.keys(this.state.projects).map(this.renderCards)}
        </ul>
      </div>
    )
  }
}

export default ProjectsContainer