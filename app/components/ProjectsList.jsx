import React, { PropTypes } from 'react';
import css from '../stylesheets/project.css';

// Components
import Card from './Card';

export default class ProjectsList extends React.Component {
  static PropTypes = {
    projects: PropTypes.array.isRequired,
  };
  state = {
    selectedProjectId: null,
  };
  handleResetScrollPosition = () => {
    const topElement = document.getElementById("card-container");
    const topPosition = topElement.scrollTop;
    document.getElementById("scroll-div").scrollTop = topPosition;
  };
  handleOpenModal = (projectId) => {
    this.setState({ selectedProjectId: projectId });
  };
  handleCloseModal = () => {
    this.setState({ selectedProjectId: null });
  };
  renderCards = (key) => {
    const {
      state: {
        selectedProjectId,
      },
      props: {
        projects,
      },
    } = this;
    return <Card
      key={key}
      project={projects[key]}
      selectedProjectId={selectedProjectId}
      closeModal={this.handleCloseModal}
      openModal={this.handleOpenModal}
      resetScroll={this.handleResetScrollPosition}
    />
  };
  render = () => {
      const {
      renderCards,
      props: {
        projects,
      }
    } = this;
    return <div className="content-container">
      <div className="section-background z-depth-2" id="scroll-div">
        <div id="card-container">
          {Object.keys(projects).map(renderCards)}
        </div>
      </div>
      {this.props.children}
    </div>
  };
}
