import React from 'react';
import css from '../stylesheets/modal.css';

import Project from './Project';

const styles = {
  order: -1,
  flex: "1 auto",
  borderBottom: "1.5vw solid #fff",
  padding: "0 1.5vw 0 1.5vw",
  width: "100%",
  backgroundColor: "white",
  overflow: "visible",
};

export default class ProjectModal extends React.Component {

  // could move this logic up to the next component
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeydown);
  };
  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeydown);
  };
  handleKeydown = (event) => {
    if (event.keyCode === 27 || event.key === "Escape") {
      this.props.closeModal();
    }
  };

  render = () => {
    // need to get rid of the word project
    const { props: { project } } = this;
    return <div style={styles}>
      <Project
        project={project}
      />
    </div>
  }
};
