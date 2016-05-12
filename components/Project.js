import css from '../stylesheets/project.css';
import React from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router';
import Rebase from 're-base';

var base = Rebase.createClass('https://newnewtest.firebaseio.com/');

class Project extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      project: {},
      index: 0
    }
    this.findProject = this.findProject.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.setNextImage = this.setNextImage.bind(this);
    this.setPreviousImage = this.setPreviousImage.bind(this);
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
  setNextImage() {
    if ((this.state.index + 1) < this.state.project.images.length) {
      this.setState({index: this.state.index + 1})
    }
    else {
      this.setState({index: 0})
    }
  }
  setPreviousImage() {
    if (this.state.index > 0) {
      this.setState({index: this.state.index - 1})
    }
    else if (this.state.index === 0) {
      this.setState({index: this.state.project.images.length - 1})
    }
  }
  render() {
    var data = this.state.project
    return (
      <div className="content-container">
        <div className="section-background z-depth-2 center-align">
          <div className="carousel-container">
            <Carousel images={data.images} index={this.state.index}/>
          </div>
            { data.images && data.images.length > 1 ?
              <div id="image-buttons" className="center-align">
                <button className="waves-effect waves-light btn" onClick={this.setPreviousImage}>Back</button>
                <button className="waves-effect waves-light btn" onClick={this.setNextImage}>Next</button>
              </div> : false
            }
          <div className="project-content">
            <a href={data.url} target="_blank"><h3>{data.title}</h3></a>
            <p className="project-description">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Project

