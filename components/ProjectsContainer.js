import React from 'react';
import Project from './Project';
import Card from './Card';
import { Link } from 'react-router';
import ProjectActions from '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore'
import Rebase from 're-base';

// const projects = () => {
//   return { projects: ProjectStore.getProjects() }
// }

var base = Rebase.createClass('https://newnewtest.firebaseio.com/');

class ProjectsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
    this.renderCards = this.renderCards.bind(this);
  }
  componentWillMount() {
    this.ref = base.bindToState('projects', {
      context: this,
      state: 'projects',
      asArray: true
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  renderCards(key) {
    return <Card key={key} index={key} project={this.state.projects[key]} />
  }
  render() {
    return (
      <div className="content-container center-align">
        <div className="section-background z-depth-2 center-align">
          <h3>Projects</h3>
          <ul>
            {Object.keys(this.state.projects).map(this.renderCards)}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProjectsContainer