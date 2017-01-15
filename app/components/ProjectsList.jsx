import React, { PropTypes } from 'react';
import css from '../stylesheets/project.css';
import { Link } from 'react-router';

// Components
import Card from './Card';

export default class ProjectsList extends React.Component {
  static PropTypes = {
    projects: PropTypes.array.isRequired,
  };
  renderCards = (key) => {
    const { projects } = this.props;
    return <Card
      key={key}
      project={projects[key]}
    />
  };
  render = () => {
      const {
      renderCards,
      props: {
        projects,
      }
    } = this;
    return <div className="content-container">
      <div className="section-background z-depth-2">
        <div id="card-container">
          {Object.keys(projects).map(renderCards)}
        </div>
      </div>
      {this.props.children}
    </div>
  };
}
