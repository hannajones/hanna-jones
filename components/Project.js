import React from 'react';
import Carousel from './Carousel';
import HomeButton from './HomeButton';
import { Link } from 'react-router';
import ProjectStore from '../stores/ProjectStore';
import ProjectActions from '../actions/ProjectActions';
import Rebase from 're-base';

// const project = () => {
//   return { project: ProjectStore.getProjects() }
// }

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
  componentWillMount() {
    this.fetchData();
  }
  findProject(project) {
    return project.id == this.props.params.id
  }
  fetchData() {
    this.ref = base.listenTo('projects', {
      context: this,
      state: 'projects',
      asArray: true,
      then(data){
        this.setState({project: data.find(this.findProject)})
      }
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  render() {
    var data = this.state.project
    var images = this.state.project.images
    console.log(images)
    return (
      <div className="content-container">
        <div className="card large z-depth-2">
          <div className="card-image">
            <Carousel images={data.images}/>
          </div>
          <div className="card-content center-align">
            <h3>{data.title}</h3>
            <p className="card-paragraph">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Project

