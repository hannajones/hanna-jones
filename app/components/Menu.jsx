import React from 'react';
import { Link, withRouter } from 'react-router';
import css from '../stylesheets/menu.css';

import NavLink from './NavLink';

export default class Menu extends React.Component {
  render = () => {
    const { router } = this.context
    const { index, onlyActiveOnIndex, to, children, ...props } = this.props
    return <div id="menu-container">
      <div id="menu" className="center-align">
        <Link to="/">
          <div className="menu-header">
            <h3>Hanna</h3>
            <h3>Jones</h3>
          </div>
        </Link>
        <NavLink className="menu-link" to="projects">
          <div className="menu-item">
            <h5>Projects</h5>
          </div>
        </NavLink>
        <NavLink className="menu-link" to="about">
          <div className="menu-item">
            <h5>About</h5>
          </div>
        </NavLink>
        <NavLink className="menu-link" to="resume">
          <div className="menu-item">
            <h5>Résumé</h5>
          </div>
        </NavLink>
        <NavLink className="menu-link" to="contact">
          <div className="menu-item contact">
            <h5>Contact</h5>
          </div>
        </NavLink>
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
      <div id="mobile-nav">
        <div id="nav-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="mobile-menu" className="center-align">
          <NavLink className="menu-link" to="about">
            <div className="mobile-menu-item">
              <h5>About</h5>
            </div>
          </NavLink>
          <NavLink className="menu-link" to="/">
            <div className="mobile-menu-item">
              <h5>Projects</h5>
            </div>
          </NavLink>
          <NavLink className="menu-link" to="resume">
            <div className="mobile-menu-item">
              <h5>Résumé</h5>
            </div>
          </NavLink>
          <NavLink className="menu-link" to="contact">
            <div className="mobile-menu-item contact">
              <h5>Contact</h5>
            </div>
          </NavLink>
          <div id="footer" className="center-align">
            <p>&copy; Hanna Jones 2016</p>
            <p><a href="mailto:jones.hanna.m@gmail.com?Subject=Hello.">jones.hanna.m@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  };
}
