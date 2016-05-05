import React from 'react';
import Carousel from './Carousel';
import HomeButton from './HomeButton';
import { Link } from 'react-router';
import ProjectStore from '../stores/ProjectStore';
import ProjectActions from '../actions/ProjectActions';
import Rebase from 're-base';

const project = () => {
  return { project: ProjectStore.getProjects() }
}

var base = Rebase.createClass('https://newnewtest.firebaseio.com/');

class Project extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      project: {}
    }
    this.findProject = this.findProject.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  // componentDidUpdate() {
  //   this.setState({project: this.state.projects.find(this.findProject)})
  // }
  findProject(project) {
    console.log(typeof(project.id))
    console.log(typeof(this.props.params.id))
    console.log(project.id == this.props.params.id)
    return project.id == this.props.params.id
  }
  fetchData() {
    console.log(this.state.projects)
    this.ref = base.listenTo('projects', {
      context: this,
      state: 'projects',
      asArray: true,
      then(data){
        console.log(data);
        this.setState({project: data.find(this.findProject)})
      }
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  render() {
    var data = this.state.project
    return (
      <div className="content-container">
        <div className="section-background z-depth-2 center-align">
          <Carousel images={data.images}/>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <HomeButton/>
        </div>
      </div>
    )
  }
}

export default Project

