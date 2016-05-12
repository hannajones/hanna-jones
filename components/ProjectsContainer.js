import css from '../stylesheets/project.css';
import mainCss from '../stylesheets/card.css';
import React from 'react';
import Project from './Project';
import Card from './Card';
import { Link } from 'react-router';
import Rebase from 're-base';

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
          <div id="card-container">
            {Object.keys(this.state.projects).map(this.renderCards)}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsContainer