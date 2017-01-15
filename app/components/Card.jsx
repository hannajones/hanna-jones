import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import css from '../stylesheets/menu.css';

// Components
import Project from './Project';

export default class Card extends React.Component {
  static PropTypes = {
    project: PropTypes.object.isRequired,
  };
  render = () => {
    const { props: { project } } = this;
    return <div className="card-image-holder">
      <Link className="card-image-link" to={`/project/${this.props.project.title.replace(/ /g, '')}`}>
        <img className="card-border" src={this.props.project.images[0]} alt="project-image" />
        <span className="image-label"><mark>{this.props.project.title}</mark></span>
      </Link>
    </div>
  };
}
