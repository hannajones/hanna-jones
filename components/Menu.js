import React from 'react';
import { Link } from 'react-router';

// refactor these stateless components using const

class Menu extends React.Component {
  render() {
    return (
      <div id="menu-container">
        <div id="menu" className="center-align">
          <div className="menu-header">
            <h3>Hanna Jones</h3>
          </div>
          <div className="menu-item">
            <h4>About</h4>
          </div>
          <div className="menu-item">
            <h4><Link to="/">Projects</Link></h4>
          </div>
          <div className="menu-item">
            <h4><Link to="resume">Résumé</Link></h4>
          </div>
          <div className="menu-item">
            <h4>Contact</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu