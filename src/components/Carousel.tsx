import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../stylesheets/carousel.css';

interface CarouselProps {
  setNextImage: any;
  images: any;
  index: number;
}

interface CarouselState {}

export default class Carousel extends React.Component<CarouselProps, CarouselState>{
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
