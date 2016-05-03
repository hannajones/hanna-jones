import React from 'react';
import Project from './Project';
import Card from './Card';
import { Link } from 'react-router';
import ProjectActions from '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore'

const projects = () => {
  return { projects: ProjectStore.getProjects() }
}

class ProjectsContainer extends React.Component {
  constructor() {
    super()
    this.state = projects();
    this.renderCards = this.renderCards.bind(this);
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    ProjectStore.addChangeListener(this._onChange)
  }
  componentWillUnmount() {
    ProjectStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    this.setState({projects})
  }
  renderCards(key) {
    return <Card key={key} index={key} project={this.state.projects[key]} />
  }

  render() {
    return (
      <div className="content-container">
        <div className="section-background z-depth-2 center-align">
          <h1>Projects</h1>
          <ul>
            {Object.keys(this.state.projects).map(this.renderCards)}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProjectsContainer