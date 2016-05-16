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
      projectIndex: null,
      index: 0
    }
    this.findProject = this.findProject.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.setNextImage = this.setNextImage.bind(this);
    this.setPreviousImage = this.setPreviousImage.bind(this);
    this.setIndex = this.setIndex.bind(this);
    this.applyActiveStyle = this.applyActiveStyle.bind(this);
    this.setProject = this.setProject.bind(this);
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
        this.setState({projects: data})
        this.setState({project: data.find(this.findProject)})
        console.log(this.state.projects.indexOf(this.state.project))
        this.setState({projectIndex: data.indexOf(this.state.project)})
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
  setProject() {
    this.setState({projectIndex: this.state.projectIndex++})
    console.log(this.state.projectIndex);
    this.setState({project: this.state.projects[this.state.projectIndex]})
  }
  setIndex(key) {
    this.setState({index: key})
  }
  applyActiveStyle(key) {
    var style = {
      color: '#b1b1b1'
    }
    var activeStyle = {
      color: '#3c3c3c',
      transform: 'scale(1.1)',
      WebkitTransform: 'scale(1.1)',
      msTransform: 'scale(1.1)',
      WebkitTransition: 'all .3s ease-in-out',
      msTransition: 'all .3s ease-in-out'
    }
    if (key === this.state.index) {
      return activeStyle
    }
    else {
      return style
    }
  }
  render() {
    var data = this.state.project;
    var self = this;
    console.log(this.state.projects);
    console.log(this.state.project);
    console.log(this.state.projectIndex);
    return (
      <div className="content-container">
        <div className="section-background z-depth-2 center-align">
          <div className="carousel-container">
            <Carousel setNextImage={this.setNextImage} images={data.images} index={this.state.index}/>
          </div>
            { data.images && data.images.length > 1 ?
              <div className="center-align">
                <span onClick={this.setPreviousImage} className="fa-stack fa-lg">
                  <i className="fa fa-angle-left fa-2x"></i>
                </span>
                { data.images.map(function(image, i) {
                  return (
                    <i key={i} onClick={() => self.setIndex(i)}style={self.applyActiveStyle(i)} className="fa fa-circle" aria-hidden="true" id="counter"></i>
                  )
                })}
                <span onClick={this.setNextImage} className="fa-stack fa-lg">
                  <i className="fa fa-angle-right fa-2x"></i>
                </span>
              </div> : false
            }
          <div className="project-content">
            { data.url ?
              <a href={data.url} target="_blank"><h3>{data.title}</h3></a>
              : <h3>{data.title}</h3>
            }
            <p className="project-description">
              {data.description}
            </p>
            <a className="waves-effect waves-light btn">Last Project</a>
            <a onClick={this.setProject} className="waves-effect waves-light btn">Next Project</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Project

