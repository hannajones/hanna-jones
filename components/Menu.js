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
            <div className="menu-item">
              <h5>Contact</h5>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Menu