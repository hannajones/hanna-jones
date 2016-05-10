import React from 'react';
import Project from './Project';
import { Link } from 'react-router';

class Card extends React.Component {
  render() {
    return (
      <div className="card-image-holder">
        <Link className="card-image-link" to={`/project/${this.props.project.id}`}>
          <img className="card-border" src={this.props.project.images[0]} alt="project-image" />
          <span className="image-label"><mark>{this.props.project.title}</mark></span>
        </Link>
      </div>
    )
  }
}

export default Card