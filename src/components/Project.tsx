import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../stylesheets/project.css';

// Components
import Carousel from './Carousel';
import LoadingPage from './LoadingPage';

interface ProjectProps {
  project: any;
  closeModal: any;
}

// could probably move all this logic into ProjectModal
export default class Project extends React.Component<ProjectProps, {}>{
  static PropTypes = {
    project: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
  };
  state = {
    index: 0
  };
  setNextImage = () => {
    if ((this.state.index + 1) < this.props.project.images.length) {
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
      this.setState({index: this.props.project.images.length - 1})
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
    const {
      state: {
        index,
      },
      props: {
        project,
        closeModal,
      },
    } = this;

    // hack to see if the project has been found
    const projectLoaded = Object.keys(project).length > 0;

    // if project has finished loading, display details
    if (projectLoaded) {
      return <div className="center-align">
        <div>
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
                  project.images.map((_, i) => {
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
            <a onClick={closeModal}><div className="waves-effect waves-light btn">Close Project (ESC)</div></a>
          </div>
        </div>
      </div>
    }

    // otherwise, show loading page while waiting for project
    return <LoadingPage/>
  };
}
