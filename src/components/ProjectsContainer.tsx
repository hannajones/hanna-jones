import * as React from 'react';
import Rebase from 're-base';
import * as firebase from 'firebase/app';
import 'firebase/database';

// TODO: dotenv all this shit
const app = firebase.initializeApp({
    apiKey: "AIzaSyB6T180hgYbEvp_ADIaFRzZux40eVHjL6A",
    authDomain: "hannajones.firebaseapp.com",
    databaseURL: "https://hannajones.firebaseio.com",
    projectId: "project-7694679328950173757",
    storageBucket: "project-7694679328950173757.appspot.com",
});
const db = firebase.database(app);
const base = Rebase.createClass(db);

import '../stylesheets/project.css';
import '../stylesheets/card.css';

// Components
import ProjectsList from './ProjectsList';
import LoadingPage from './LoadingPage';

// data from Firebase is pulled into the app here
// const base = Rebase.createClass('https://hannajones.firebaseio.com/');

export default class ProjectsContainer extends React.Component {
  state = {
    projects: [],
  };
  // loading data fetched from Firebase into state
  componentWillMount = () => {
    (this as any).ref = base.bindToState('projects', {
      context: this,
      state: 'projects',
      asArray: true
    });
  };
  componentWillUnmount = () => {
    base.removeBinding((this as any).ref);
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
