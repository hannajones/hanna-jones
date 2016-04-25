import React from 'react';
import ProjectsContainer from './ProjectsContainer';
import ProjectForm from './ProjectForm';
import Rebase from 're-base';
import ProjectActions from '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore'

function getCatalog() {
  return { projects: ProjectStore.getCatalog() }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = getCatalog()
  }
  render() {
    // let projects = this.state.projects.map(project => {
    //   return <li key={project.id}>{project.title}</li>
    // });
    return (
      <div>
        <ProjectsContainer projects={this.state.projects}/>
      </div>
    )
  }
}

export default App
