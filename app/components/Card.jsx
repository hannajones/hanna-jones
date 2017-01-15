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
      <Link className="card-image-link" to={`projects/${project.title.replace(/ /g, '')}`}>
        <img className="card-border" src={project.images[0]} alt="project-image" />
        <span className="image-label"><mark>{project.title}</mark></span>
      </Link>
    </div>
  };
}
