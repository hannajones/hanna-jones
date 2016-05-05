import React from 'react';
import HomeButton from './HomeButton';
import { Link } from 'react-router';

class Resume extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="section-background z-depth-2 center-align">
          <h3>Hanna M. Jones</h3>
          <p>jones.hanna.m@gmail.com / (514) 649-2986</p>
          <div className="header-bar">
            <h5>Education</h5> 
          </div>
          <div id="education-flex">
            <div id="resume-col-1">
              <h6>Lighthouse Labs, Toronto, ON</h6>
              <em>January - March 2016</em>
              <p>Web Development Bootcamp</p>
            </div>
            <div id="resume-col-2">
              <h6>McGill University, Montréal, QC</h6>
              <em>September 2009 - May 2013</em>
              <p>B.A. History & Art History</p>
            </div>
          </div>
          <div className="header-bar">
            <h5>Projects</h5>
          </div>
            <div id="resume-project-flex">
              <div className="resume-project">
                <h6>SFUSD Selects</h6>
                <p>- Web and Android app to help parents make informed decisions about San Francisco public schools</p>
                <p>- Building with React, Rails API, Google Maps API, Facebook & Twitter OAuth</p>
              </div>
              <div className="resume-project">
                <h6><a href="https://lhl-hopper.herokuapp.com/" target="_blank">Hopper</a></h6>
                <p>- Web app dedicated to helping locals and tourists alike navigate Toronto’s nightlife by maintaining a database of community curated “bar hops”</p>
                <p>- Built using Ruby on Rails, React, PostgreSQL, Google Maps API</p>
              </div>
              <div className="resume-project">
                <h6><a href="http://imjm.ca/" target="_blank">Museum of Jewish Montreal</a></h6>
                <p>- Basic UI / UX design for the Museum of Jewish Montreal to assist with their website
                redesign and make navigating their home page more intuitive</p>
                <p>- Created mockups and wireframes using Adobe Creative Suite and Balsamiq</p>
              </div>
            </div>
          <div className="header-bar">
            <h5>Professional Experience</h5>
          </div>
          <div className="resume-job left-align">
            <span><h6>Museum of Jewish Montreal, Montréal, QC</h6>
            <strong>Development & Special Projects Manager</strong> <em>(December 2013 - December 2015)</em></span>
            <p>- Third full-time employee of a start-up virtual museum dedicated to finding new ways
           to preserve and share Montréal’s Jewish history.</p>
            <p>- Worked with an external web developer to redesign the Museum’s website. Created
            mockups using Photoshop and Illustrator that formed the basis for the finished site.</p>
            <p>- Completed basic UI/UX design tasks for the Museum’s new Stories Project oral history
            web app using Balsamiq Mockups and Photoshop.</p>
          </div>
          <div className="resume-job">
            <h6>McGill University, Montréal, QC</h6>
            <strong>Research Assistant, Art History Department</strong> <em>(May - July 2013)</em>
            <p>- Conducted research for projects on 19th century French art and culture. Duties
            consisted of compiling bibliographies, creating summary reports on sources, and
            making image licensing inquiries to Art Resource and The Bridgeman Art Library.</p>
          </div>
          <div className="resume-job">
            <h6>Development Intern: Institutional Giving</h6> <em>(June - August 2012)</em>
            <p>- Conducted database research to develop profiles for grant-making organizations.</p>
            <p>- Drafted letters of inquiry, wrote and edited sections of grant proposals, and
            contributed to all aspects of donor-related correspondence.</p>
          </div>
          <div className="header-bar">
            <h5>Skills & Abilities</h5>
          </div>
          <div id="resume-skills">
            <h6>Programming</h6>
              <p>JavaScript / React / Ruby / Rails / HTML / CSS / Sinatra / SQL</p>
            <h6>Design</h6>
              <p>Sketch / Adobe Creative Suite / Balsamiq</p>
          </div>
          <HomeButton/>
        </div>
      </div>
    )
  }
}

export default Resume