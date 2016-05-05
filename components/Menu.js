import React from 'react';
import { Link } from 'react-router';

// refactor these stateless components using const

class Menu extends React.Component {
  render() {
    return (
      <div id="menu-container">
        <div id="menu" className="center-align">
          <Link to="/">
            <div className="menu-header">
              <h3>Hanna</h3>
              <h3>Jones</h3>
            </div>
          </Link>
          <Link className="menu-link" to="/">
            <div className="menu-item">
              <h5>About</h5>
            </div>
          </Link>
          <Link className="menu-link" to="projects">
            <div className="menu-item">
              <h5>Projects</h5>
            </div>
          </Link>
          <Link className="menu-link" to="resume">
            <div className="menu-item">
              <h5>Résumé</h5>
            </div>
          </Link>
          <Link className="menu-link" to="about">
            <div className="menu-item contact">
              <h5>Contact</h5>
            </div>
          </Link>
        </div>
        <div id="social-icons" className="center-align">
          <span className="fa-stack fa-lg">
            <i className="fa fa fa-github-square fa-3x"></i>
          </span>
          <span className="fa-stack fa-lg">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
          </span>
          <span className="fa-stack fa-lg">
            <i className="fa fa-instagram fa-3x"></i>
          </span>
        </div>
      </div>
    )
  }
}

export default Menu