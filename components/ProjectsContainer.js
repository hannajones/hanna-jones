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
  // componentDidUpdate() {
  //   console.log(this.state.projects);
  //   var keys = Object.keys(this.state.projects)
  //   console.log(keys)
  //   console.log(this.state.projects[keys[0]])
  //   console.log(this.state.projects[keys[1]])
  // }
  renderCards(key) {
    return <Card key={key} index={key} project={this.state.projects[key]} />
  }
  render() {
    return (
      <div className="content-container center-align">
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