import React, { PropTypes } from 'react';
import css from '../stylesheets/carousel.css';

export default class Carousel extends React.Component {
  static PropTypes = {
    setNextImage: PropTypes.func.isRequired,
    images: PropTypes.array,
    index: PropTypes.number,
  };
  render = () => {
    const {
      props: {
        setNextImage,
        images,
        index,
      }
    } = this;
    return <div className="image-container center-align">
      {
        this.props.images &&
        <div id="carousel-image-container">
          <img
            onClick={setNextImage}
            className="carousel-image"
            src={images[index]}
            alt="image"
          />
        </div>
      }
    </div>
  };
}
