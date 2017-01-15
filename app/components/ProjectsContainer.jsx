import React from 'react';
import css from '../stylesheets/project.css';
import mainCss from '../stylesheets/card.css';
import { Link } from 'react-router';
import Rebase from 're-base';

// Components
import ProjectsList from './ProjectsList';
import LoadingPage from './LoadingPage';

// data from Firebase is pulled into the app here
const base = Rebase.createClass('https://hannajones.firebaseio.com/');

export default class ProjectsContainer extends React.Component {
  state = {
    projects: [],
  };
  // loading data fetched from Firebase into state
  componentWillMount = () => {
    this.ref = base.bindToState('projects', {
      context: this,
      state: 'projects',
      asArray: true
    });
  };
  componentWillUnmount = () => {
    base.removeBinding(this.ref);
  };

  render = () => {
    // use object destructuring to pull properties off state
    // length property of projects aliased as projectsCount
    const {
      state: {
        projects,
        projects: {length: projectsCount},
      },
    } = this;

    // if project data in state, render presentational component
    if (projectsCount > 0) {
      return <ProjectsList
        projects={projects}
      />
    }

    // otherwise, displays loading page
    return <LoadingPage/>
  };
}
