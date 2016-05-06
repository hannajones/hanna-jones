import React from 'react';
import Project from './Project';
import { Link } from 'react-router';

class Card extends React.Component {
  render() {
    return (
      <div className="set-width">
        <div className="card small">
          <div className="card-image">
            <img src={this.props.project.images[0]} alt="image" />
              <span className="card-title">{this.props.project.title}</span>
          </div>
          <div className="card-content">
            <p className="card-paragraph">{this.props.project.description}</p>
          </div>
          <div className="card-action">
            <Link to={`/project/${this.props.project.id}`}>{this.props.project.title}</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Card