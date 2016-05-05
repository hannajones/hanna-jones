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
        <div className="section-background z-depth-2 center-align">
          <div className="resume">
            <h3>Hanna M. Jones</h3>
            <p>jones.hanna.m@gmail.com / (514) 649-2986</p>
            <div className="header-bar">
              <h5>Education</h5>
            </div>
            <div id="resume-col-1">
                Lighthouse Labs, Toronto, ON
                January - March 2016
                Web Development Bootcamp
              </div>
              <div id="resume-col-2">
                McGill University, Montréal, QC
                September 2009 - May 2013
                B.A. History & Art History
              </div>
            <div className="header-bar">
              <h5>Projects</h5>
            </div>
            <div className="resume-project">
              SFUSD Selects (Coming Soon)
              •• Web and Android app to help parents make informed decisions about San Francisco
              public schools
              •• Building with React, Rails API, Google Maps API, Facebook & Twitter OAuth
            </div>
            <div className="resume-project">
              Hopper (https://lhl-hopper.herokuapp.com/)
              •• Web app dedicated to helping locals and tourists alike navigate Toronto’s nightlife by
              maintaining a database of community curated “bar hops”
              •• Built using Ruby on Rails, React, PostgreSQL, Google Maps API
            </div>
            <div className="resume-project">
              Museum of Jewish Montreal (http://imjm.ca/)
              •• Basic UI / UX design for the Museum of Jewish Montreal to assist with their website
              redesign and make navigating their home page more intuitive
              •• Created mockups and wireframes using Adobe Creative Suite and Balsamiq
            </div>
            <div className="header-bar">
              <h5>Professional Experience</h5>
            </div>
            <div className="resume-job">
              Museum of Jewish Montreal, Montréal, QC
              Development & Special Projects Manager (December 2013 - December 2015)
              •• Third full-time employee of a start-up virtual museum dedicated to finding new ways
              to preserve and share Montréal’s Jewish history.
              •• Worked with an external web developer to redesign the Museum’s website. Created
              mockups using Photoshop and Illustrator that formed the basis for the finished site.
              •• Completed basic UI/UX design tasks for the Museum’s new Stories Project oral history
              web app using Balsamiq Mockups and Photoshop.
            </div>
            <div className="resume-job">
              McGill University, Montréal, QC
              Research Assistant, Art History Department (May - July 2013)
              •• Conducted research for projects on 19th century French art and culture. Duties
              consisted of compiling bibliographies, creating summary reports on sources, and
              making image licensing inquiries to Art Resource and The Bridgeman Art Library.
            </div>
            <div className="resume-job">
              Development Intern: Institutional Giving (June - August 2012)
              •• Conducted database research to develop profiles for grant-making organizations.
              •• Drafted letters of inquiry, wrote and edited sections of grant proposals, and
              contributed to all aspects of donor-related correspondence.
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
      </div>
    )
  }
}

export default Resume