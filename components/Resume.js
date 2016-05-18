import css from '../stylesheets/resume.css';
import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Resume extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: []
    }
    this.renderProjects = this.renderProjects.bind(this);
    this.setExpanded = this.setExpanded.bind(this);
  }
  setExpanded(title) {
    var newExpanded = this.state.expanded;
    if (newExpanded.indexOf(title) != -1) {
      newExpanded.splice(newExpanded.indexOf(title), 1);
    }
    else {
      newExpanded.push(title);
    }
    this.setState({expanded: newExpanded});
  }
  renderSchools() {
    return (
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
    )
  }
  renderProjects() {
    return (
      <div id="resume-project-flex">
        <div className="resume-project">
          <h6><a id="underline" href="https://lhl-hopper.herokuapp.com/" target="_blank">Hopper</a></h6>
          <p>- Web app dedicated to helping locals and tourists alike navigate Toronto’s nightlife by maintaining a database of community curated “bar hops”</p>
          <p>- Built using Ruby on Rails, React, PostgreSQL, Google Maps API</p>
        </div>
        <div className="resume-project">
          <h6><a id="underline" href="http://imjm.ca/" target="_blank">Museum of Jewish Montreal</a></h6>
          <p>- Basic UI / UX design for the Museum of Jewish Montreal to assist with their website
          redesign and make navigating their home page more intuitive</p>
          <p>- Created mockups and wireframes using Adobe Creative Suite and Balsamiq</p>
        </div>
        <div className="resume-project">
          <h6>SFUSD Selects</h6>
          <p>- Web and Android app to help parents make informed decisions about San Francisco public schools</p>
          <p>- Building with React, Rails API, Google Maps API, Facebook & Twitter OAuth</p>
        </div>
      </div>
    )
  }
  renderJobs() {
    return (
      <div>
        <div className="resume-job left-align">
          <h5 className="job-title">Development & Special Projects Manager</h5>
          <em className="job-dates">(December 2013 - December 2015)</em>
          <a href="http://imjm.ca/"><h6>Museum of Jewish Montreal, Montréal, QC</h6></a>
          <p>- Third full-time employee of a start-up virtual museum dedicated to finding new ways
         to preserve and share Montréal’s Jewish history.</p>
          <p>- Worked with an external web developer to redesign the Museum’s website. Created
          mockups using Photoshop and Illustrator that formed the basis for the finished site.</p>
          <p>- Completed basic UI/UX design tasks for the Museum’s new Stories Project oral history
          web app using Balsamiq Mockups and Photoshop.</p>
        </div>
        <div className="resume-job left-align">
          <h5 className="job-title">Research Assistant - Art History Department</h5>
          <em className="job-dates">(May - July 2013)</em>
          <h6>McGill University, Montréal, QC</h6>
          <p>- Conducted research for projects on 19th century French art and culture. Duties
          consisted of compiling bibliographies, creating summary reports on sources, and
          making image licensing inquiries to Art Resource and The Bridgeman Art Library.</p>
        </div>
        <div className="resume-job left-align">
          <h5>Development Intern - Institutional Giving</h5> 
          <em className="job-dates">(June - August 2012)</em>
          <h6>New-York Historical Society, New York, NY</h6>
          <p>- Conducted database research to develop profiles for grant-making organizations.</p>
          <p>- Drafted letters of inquiry, wrote and edited sections of grant proposals, and
          contributed to all aspects of donor-related correspondence.</p>
        </div>
      </div>
    )
  }
  renderSkills() {
    return (
      <div id="resume-skills">
        <h6>Programming</h6>
          <p>JavaScript / React / Ruby / Rails / HTML / CSS / Sinatra / SQL</p>
        <h6>Design</h6>
          <p>Sketch / Adobe Creative Suite / Balsamiq</p>
      </div>
    )
  }
  render() {
    var self = this;
    return (
      <div className="content-container">
        <div className="section-background z-depth-2 center-align">
          <h3>Hanna M. Jones</h3>
          <p><a href="mailto:jones.hanna.m@gmail.com?Subject=Hello.">jones.hanna.m@gmail.com</a> / (514) 649-2986</p>
          <p>[ click on sections below for details ]</p>
          <div className="header-bar" onClick={() => this.setExpanded('schools')}>
            <h5>Education</h5>
          </div>
          <ReactCSSTransitionGroup
            className="details"
            component="div"
            transitionName="details"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={100}
          >
            { this.state.expanded.indexOf('schools') != -1  ? this.renderSchools() : false }
          </ReactCSSTransitionGroup>
          <div className="header-bar" onClick={() => this.setExpanded('skills')}>
            <h5>Skills & Abilities</h5>
          </div>
          <ReactCSSTransitionGroup
            className="details"
            component="div"
            transitionName="details"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={100}
          >
            { this.state.expanded.indexOf('skills') != -1  ? this.renderSkills() : false }
          </ReactCSSTransitionGroup>
          <div className="header-bar" onClick={() => this.setExpanded('projects')}>
            <h5>Projects</h5>
          </div>
          <ReactCSSTransitionGroup
            className="details"
            component="div"
            transitionName="details"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={100}
          >
            { this.state.expanded.indexOf('projects') != -1  ? this.renderProjects() : false }
          </ReactCSSTransitionGroup>
          <div className="header-bar" onClick={() => this.setExpanded('jobs')}>
            <h5>Professional Experience</h5>
          </div>
          <ReactCSSTransitionGroup
            className="details"
            component="div"
            transitionName="details"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={100}
          >
            { this.state.expanded.indexOf('jobs') != -1  ? this.renderJobs() : false }
          </ReactCSSTransitionGroup>
          <div>
            <Link to="/"><div className="waves-effect waves-light btn">Download Resume</div></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume