import css from '../stylesheets/About.css';
import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="section-background z-depth-2">
          <div id="about-image-container">
            <img id="about-image" src="https://s3.amazonaws.com/hanna-jones-photos/about/hanna-web.jpg" alt="hanna jones"/>
          </div>
          <h3 id="about-header" className="center-align">Hanna Jones</h3>
          <div id="description-content" className="center-align">
            <p>My name is Hanna Jones and I'm a front-end web developer and recent Toronto transplant by way of Montreal (and originally San Francisco) looking to build beautiful, unique websites & web apps. I'm interested in exploring the potential of JavaScript for building clean, intuitive user interfaces and delving deeper into data-driven applications. When I'm not sitting in cafes engrossed in my laptop, I'm an aspiring cross-country cyclist & techno enthusiast.</p>
              <p>I'm currently looking to take on new projects and opportunities. Explore this site to learn more about my <Link to="resume">experience</Link> and <Link to="projects">projects</Link>, and feel free to <a href="mailto:jones.hanna.m@gmail.com?Subject=Hello.">get in touch.</a></p>
          </div>
        </div>
      </div>
    )
  };
}

export default About