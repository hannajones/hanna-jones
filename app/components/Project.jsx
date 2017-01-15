import React from 'react';
import css from '../stylesheets/project.css';
import { Link } from 'react-router';
import Rebase from 're-base';

// Components
import Carousel from './Carousel';
import LoadingPage from './LoadingPage';

const base = Rebase.createClass('https://hannajones.firebaseio.com/');

export default class Project extends React.Component {
  state = {
    projects: [],
    project: {},
    index: 0
  }
  componentWillMount = () => {
    this.fetchData();
  };
  componentWillUnmount = () => {
    base.removeBinding(this.ref);
  };
  findProject = (project) => {
    return project.title.replace(/ /g, '') == this.props.params.id
  };

  // right now, I am finding the particular project in a very convoluted way
  // by first loading in all of the projects
  // then finding the correct project by comparing title to route params
  // there is definitely a better way to do this
  fetchData = () => {
    this.ref = base.listenTo('projects', {
      context: this,
      state: 'projects',
      asArray: true,
      then(data){
        this.setState({projects: data})
        this.setState({project: data.find(this.findProject)})
      }
    });
  };
  setNextImage = () => {
    if ((this.state.index + 1) < this.state.project.images.length) {
      this.setState({index: this.state.index + 1})
    }
    else {
      this.setState({index: 0})
    }
  };
  setPreviousImage = () => {
    if (this.state.index > 0) {
      this.setState({index: this.state.index - 1})
    }
    else if (this.state.index === 0) {
      this.setState({index: this.state.project.images.length - 1})
    }
  };
  setIndex = (key) => {
    this.setState({index: key})
  };
  applyActiveStyle = (key) => {
    const style = {
      color: '#b1b1b1'
    }
    const activeStyle = {
      color: '#3c3c3c',
      transform: 'scale(1.1)',
      WebkitTransform: 'scale(1.1)',
      msTransform: 'scale(1.1)',
      WebkitTransition: 'all .5s ease-in-out',
      msTransition: 'all .5s ease-in-out'
    }
    if (key === this.state.index) {
      return activeStyle
    }
    else {
      return style
    }
  };

  render = () => {
    console.log('active');
    const { state: { project, index } } = this;

    // hack to see if the project has been found
    const projectLoaded = Object.keys(project).length > 0;

    // if project has finished loading, display details
    if (projectLoaded) {
      return <div className="content-container">
        <div className="section-background z-depth-2 center-align">
          <div className="carousel-container">
            <Carousel
              setNextImage={this.setNextImage}
              images={project.images}
              index={index}
            />
          </div>
            {
              project.images && project.images.length > 1 &&
              <div className="center-align">
                <span onClick={this.setPreviousImage} className="fa-stack fa-lg">
                  <i className="fa fa-angle-left fa-2x"></i>
                </span>
                {
                  project.images.map((image, i) => {
                    return <i
                      key={i}
                      onClick={() => this.setIndex(i)}
                      style={this.applyActiveStyle(i)}
                      className="fa fa-circle"
                      aria-hidden="true"
                      id="counter">
                    </i>
                  })
                }
                <span onClick={this.setNextImage} className="fa-stack fa-lg">
                  <i className="fa fa-angle-right fa-2x"></i>
                </span>
              </div>
            }
          <div className="project-content">
            {
              project.url ?
              <a href={project.url} target="_blank"><h3>{project.title}</h3></a>
              : <h3>{project.title}</h3>
            }
            <p className="project-description">
              {project.description}
            </p>
            <Link to="/"><div className="waves-effect waves-light btn">Back to Projects</div></Link>
          </div>
        </div>
      </div>
    }

    // otherwise, show loading page while waiting for project
    return <LoadingPage/>
  };
}
