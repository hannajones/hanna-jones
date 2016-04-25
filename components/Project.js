import React from 'react';
import Carousel from './Carousel';
import ProjectStore from '../stores/ProjectStore';

class Project extends React.Component {
  // renderImages(image) {
  //   return (
  //     <div className="image-container" key={image}>
  //       <img className="project-image" src={image} alt="image"/>
  //     </div>
  //   )
  // }
  render() {
    return (
      <div>
        <p>{this.props.params.title}</p>
        {/*<Carousel images={data.images}/>
        <h3>{data.title}</h3>
        <p>{data.description}</p>*/}
      </div>
    )
  }
}

export default Project

// trying to use store
// componentWillMount / componentDidMount
// need to find the project data where project.title === this.props.params.title
// not sure if this is possible