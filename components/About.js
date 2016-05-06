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
          <h4 id="about-header" className="center-align">Hanna Jones</h4>
          <div id="description-content" className="center-align">
            <p>My name is Hanna Jones and I'm a front-end web developer and recent Toronto transplant by way of Montreal (and originally San Francisco) looking to build beautiful things on the World Wide Web. I'm interested in exploring the potential of JavaScript for building clean, intuitive, interactive user interfaces and delving deeper into data-driven applications. When I'm not sitting in cafes engrossed in my laptop, I'm an aspiring long distance cyclist, techno enthusiast, (and something).</p>
              <p>I'm urrently looking to take on new projects and opportunities. Explore this site to learn more about my <Link to="resume">experience</Link> and <Link to="projects">projects</Link>, and feel free to get in touch.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About