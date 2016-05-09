import React from 'react';
import Project from './Project';
import { Link } from 'react-router';

class Card extends React.Component {
  render() {
    return (
      <div className="card-image-holder">
        <Link to={`/project/${this.props.project.id}`}>
          <span className="image-label"><mark>{this.props.project.title}</mark></span>
          <img className="card-border" src={this.props.project.images[0]} alt="project-image" />
        </Link>
      </div>
    )
  }
}

export default Card