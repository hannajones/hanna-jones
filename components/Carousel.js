import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
    this.setNextImage = this.setNextImage.bind(this)
    this.setPreviousImage = this.setPreviousImage.bind(this)
  }
  setNextImage() {
    if ((this.state.index + 1) < this.props.images.length) {
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
      this.setState({index: this.props.images.length - 1})
    }
  }
  render() {
    return (
      <div className="image-container">
        <img className="project-image" src={this.props.images[this.state.index]} alt="image"/>
          { this.props.images.length > 1 ? 
            <div id="buttons">
              <a className="waves-effect waves-light btn" onClick={this.setPreviousImage}>Back</a>
              <a className="waves-effect waves-light btn" onClick={this.setNextImage}>Next</a>
            </div>
            : false
          }
      </div>
    )
  }
}

export default Carousel