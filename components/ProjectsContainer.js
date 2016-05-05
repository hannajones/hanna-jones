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
    // this.renderData = this.renderData.bind(this);
    // this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    base.bindToState('projects', {
      context: this,
      state: 'projects',
      asArray: true
    });
  }
  componentDidUpdate() {
    console.log(this.state.projects);
    var keys = Object.keys(this.state.projects)
    console.log(keys)
    console.log(this.state.projects[keys[0]])
    console.log(this.state.projects[keys[1]])
  }
  // renderData(projects) {
  //   console.log(projects)
  //   var myProjects = [];
  //   var keys = Object.keys(projects);
  //   console.log(keys);
  //   for (var i = 0; i < keys.length; i++) {
  //     var key = keys[i];
  //     myProjects.push(projects[key])
  //   }
  // }


  // componentWillMount() {
  //   ProjectStore.addChangeListener(this._onChange)
  // }
  // componentWillUnmount() {
  //   ProjectStore.removeChangeListener(this._onChange)
  // }
  // _onChange() {
  //   this.setState({projects})
  // }
  renderCards(key) {
    console.log(key)
    return <Card key={key} index={key} project={this.state.projects[key]} />
  }
  render() {
    // var newKeys = Object.keys(project)
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
    // console.log(keys)
    // console.log(project)
    // console.log(newKeys)
  }
}

export default ProjectsContainer