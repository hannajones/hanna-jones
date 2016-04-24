import React from 'react'
import Carousel from './Carousel'

class Project extends React.Component {
  renderImages(image) {
    return (
      <div className="image-container" key={image}>
        <img className="project-image" src={image} alt="image"/>
      </div>
    )
  }
  render() {
    var data = this.props.data
    return (
      <div>
        <Carousel images={data.images}/>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    )
  }
}

export default Project