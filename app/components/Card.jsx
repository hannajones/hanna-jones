import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import css from '../stylesheets/menu.css';

// Components
import Project from './Project';
import ProjectModal from './ProjectModal';

export default class Card extends React.Component {
  static PropTypes = {
    project: PropTypes.object.isRequired,
  };
  state = {
    modalOpen: false,
  };
  handleOpenModal = () => {
    this.setState({
      modalOpen: true,
    });
    console.log(this.state);
  };
  handleCloseModal = () => {
    this.setState({
      modalOpen: false,
    });
  };
  render = () => {
    const {
      state: {
        modalOpen,
      },
      props: {
        project,
      },
    } = this;

    if (modalOpen) {
      return <ProjectModal
        project={project}
        closeModal={this.handleCloseModal}
      />
    }

    return <div className="card-image-holder">
      <a className="card-image-link" onClick={this.handleOpenModal}>
        <img className="card-border" src={project.images[0]} alt="project-image" />
        <span className="image-label"><mark>{project.title}</mark></span>
      </a>
    </div>

    // return <div className="card-image-holder">
    //   <Link className="card-image-link" to={`projects/${project.title.replace(/ /g, '')}`}>
    //     <img className="card-border" src={project.images[0]} alt="project-image" />
    //     <span className="image-label"><mark>{project.title}</mark></span>
    //   </Link>
    // </div>
  };
}

// if the card knows all of the project details (pass down from above)
// could have it render a modal on click
// that modal would cover the existing background (use the same css)
// modal would render out the carousel
// would essentially be like a project
// but changing the css more than anything
// listen for escape, press back, press anywhere on the screen
