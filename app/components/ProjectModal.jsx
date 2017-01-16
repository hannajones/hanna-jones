import React from 'react';
import css from '../stylesheets/modal.css';

const styles = {
  flex: "1 auto",
  borderBottom: "1.5vw solid #fff",
  padding: "0 1.5vw 0 1.5vw",
  width: "100%",
  height: "90vh",
  backgroundColor: "white",
  overflow: "scroll",
}

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
    return <div style={styles}>
      I'm the modal
    </div>
  }
};
