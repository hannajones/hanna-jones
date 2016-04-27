import React from 'react';
import { Link } from 'react-router';

// refactor these stateless components using const

class Menu extends React.Component {
  render() {
    return (
      <div id="menu-container">
        <div id="menu" className="center-align">
          <div className="menu-header">
            <h3>Hanna</h3>
            <h3>Jones</h3>
          </div>
          <div className="menu-item">
            <h5><Link className="menu-link" to="about">About</Link></h5>
          </div>
          <div className="menu-item">
            <h5><Link className="menu-link" to="projects">Projects</Link></h5>
          </div>
          <div className="menu-item">
            <h5><Link className="menu-link" to="resume">Résumé</Link></h5>
          </div>
          <div className="menu-item">
            <h5><Link className="menu-link" to="/">Contact</Link></h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu