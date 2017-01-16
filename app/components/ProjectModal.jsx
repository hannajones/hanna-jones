import React from 'react';
import css from '../stylesheets/modal.css';

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
    return <div className="content-container">
      <div className="section-background z-depth-2">
        I'm the modal
      </div>
    </div>
  }
};
