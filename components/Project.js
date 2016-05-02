import React from 'react';
import Carousel from './Carousel';
import HomeButton from './HomeButton';
import { Link } from 'react-router';
import ProjectStore from '../stores/ProjectStore';
import ProjectActions from '../actions/ProjectActions';

function getCatalog() {
  return { project: ProjectStore.getCatalog() }
}

class Project extends React.Component {
  constructor() {
    super()
    this.state = getCatalog()
    this.findProject = this.findProject.bind(this)
  }
  componentWillMount() {
    this.findProject()
  }
  findProject() {
    var id = this.props.params.id
    var project = this.state.project[id - 1]
    this.setState({project: project})
  }
  render() {
    var data = this.state.project
    return (
      <div className="content-container">
        <div className="section-background z-depth-2">
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
