import React from 'react';
import Project from './Project';
import Card from './Card';
import { Link } from 'react-router';
import ProjectActions from '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore'

function getCatalog() {
  return { projects: ProjectStore.getCatalog() }
}

class ProjectsContainer extends React.Component {
  constructor() {
    super()
    this.state = getCatalog()
    this.renderCards = this.renderCards.bind(this)
  }
  renderCards(key) {
    return <Card key={key} index={key} project={this.state.projects[key]} />
  }
  render() {
    return (
      <div id="projects-container">
        <h1>Projects</h1>
        <ul>
          {Object.keys(this.state.projects).map(this.renderCards)}
        </ul>
      </div>
    )
  }
}

export default ProjectsContainer