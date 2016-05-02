import React from 'react';
import HomeButton from './HomeButton';
import { Link } from 'react-router';


// should probably make each sub section of the resume its own component - load the text data in from the database

// also make the home button a const - render it in different places, but will never have any props/state

// actually this might not be necessary once I implement a menu

class Resume extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="section-background z-depth-2">
          <div className="resume">
            <h3>Hanna M. Jones</h3>
            <p>jones.hanna.m@gmail.com</p>
            <p>(514) 649-2986</p>
            <p>100 Lower Ossington, apt. 714</p>
            <p>Toronto, ON M6J 0A7</p>
            <div className="header-bar">
              <h5>Education</h5>
            </div>
            <div className="header-bar">
              <h5>Projects</h5>
            </div>
            <div className="header-bar">
              <h5>Work Experience</h5>
            </div>
            <div className="header-bar">
              <h5>Skills & Abilities</h5>
            </div>
            <HomeButton/>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume