import React from 'react';
import Carousel from './Carousel';
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
      <div>
        <Carousel images={data.images}/>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <a className="waves-effect waves-light btn"><Link className="white-text" to="/">Home</Link></a>
      </div>
    )
  }
}

export default Project
