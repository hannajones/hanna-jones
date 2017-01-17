import React, { PropTypes } from 'react';
import css from '../stylesheets/modal.css';

// Components
import Project from './Project';

// ideally want to move to inline styles in the future
// or at least have styling encapsulated in components
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
  static PropTypes = {
    project: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
  };
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
    const { props: { project, closeModal } } = this;
    return <div style={styles}>
      <Project
        project={project}
        closeModal={closeModal}
      />
    </div>
  }
};
