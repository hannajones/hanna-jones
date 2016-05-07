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
      <div className="image-container center-align">
        { this.props.images ?
          <div id="carousel-image-container">
            <img className="carousel-image" src={this.props.images[this.props.index]} alt="image"/>
          </div>
        : false
        }
      </div>
    )
  }
}

export default Carousel