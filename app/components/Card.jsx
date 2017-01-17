import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import css from '../stylesheets/menu.css';

// Components
import Project from './Project';
import ProjectModal from './ProjectModal';

export default class Card extends React.Component {
  static PropTypes = {
    project: PropTypes.object.isRequired,
    selectedProjectId: PropTypes.number,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    resetScroll: PropTypes.func.isRequired,
  };
  handleClick = () => {
    this.props.resetScroll();
    this.props.openModal(this.props.project.id);
  };

  render = () => {
    const {
      props: {
        project,
        selectedProjectId,
        closeModal,
        openModal,
      },
    } = this;

    if (selectedProjectId === project.id) {
      return <ProjectModal
        project={project}
        closeModal={closeModal}
      />
    }

    return <div className="card-image-holder">
      <a className="card-image-link" onClick={this.handleClick}>
        <img className="card-border" src={project.images[0]} alt="project-image" />
        <span className="image-label"><mark>{project.title}</mark></span>
      </a>
    </div>
  };
}
