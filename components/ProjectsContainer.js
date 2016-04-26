import React from 'react';
import Project from './Project';
import Card from './Card';
import { Link } from 'react-router';

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
      <div id="projects-container">
        <h1>Projects</h1>
        <ul>
          {Object.keys(this.props.projects).map(this.renderCards)}
        </ul>
      </div>
    )
  }
}

export default ProjectsContainer