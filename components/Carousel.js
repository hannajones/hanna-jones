import css from '../stylesheets/carousel.css';
import React from 'react';

class Carousel extends React.Component {
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

// { this.props.images && this.props.images.length > 1 ?
//   <div id="image-counter">
//     { for (var i = 0; i < this.props.images.length; i++) {
//       console.log(i);
//     }}
//   </div>
// : false
// }