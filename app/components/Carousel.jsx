import css from '../stylesheets/carousel.css';
import React from 'react';

class Carousel extends React.Component {
  render() {
    return (
      <div className="image-container center-align">
        { this.props.images ?
          <div id="carousel-image-container">
            <img onClick={this.props.setNextImage} className="carousel-image" src={this.props.images[this.props.index]} alt="image"/>
          </div>
        : false
        }
      </div>
    )
  };
}

export default Carousel