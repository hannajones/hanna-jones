import React from 'react';
import { Link } from 'react-router';

// refactor these stateless components using const

class Menu extends React.Component {
  render() {
    return (
      <div id="menu-container">
        <div id="menu" className="center-align">
          <Link to="/" activeClassName="active">
            <div className="menu-header">
              <h3>Hanna</h3>
              <h3>Jones</h3>
            </div>
          </Link>
          <Link className="menu-link" to="about">
            <div className="menu-item">
              <h5>About</h5>
            </div>
          </Link>
          <Link className="menu-link" to="/">
            <div className="menu-item">
              <h5>Projects</h5>
            </div>
          </Link>
          <Link className="menu-link" to="resume">
            <div className="menu-item">
              <h5>Résumé</h5>
            </div>
          </Link>
          <Link className="menu-link" to="contact">
            <div className="menu-item contact">
              <h5>Contact</h5>
            </div>
          </Link>
        </div>
        <div id="social-icons" className="center-align">
          <a href="https://github.com/hannajones" target="_blank">
            <span className="fa-stack fa-lg">
              <i className="fa fa-github-square fa-3x"></i>
            </span>
          </a>
          <a href="https://ca.linkedin.com/in/hanna-jones-27345a20" target="_blank">
            <span className="fa-stack fa-lg">
              <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </span>
          </a>
          <a href="https://www.instagram.com/jonesxhanna/" target="_blank">
            <span className="fa-stack fa-lg">
              <i className="fa fa-instagram fa-3x"></i>
            </span>
          </a>
        </div>
      </div>
    )
  }
}

export default Menu