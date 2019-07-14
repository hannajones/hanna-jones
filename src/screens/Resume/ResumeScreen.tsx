import * as React from 'react';
import Card from '../../components/Card';

interface ResumeScreenProps { };

// TODO: split into components
const ResumeScreen: React.FunctionComponent<ResumeScreenProps> = () => (
  <Card>
    <div className="resume">
      <div className="resume__header">
        <h3>Hanna M. Jones</h3>
        <p><a href="mailto:jones.hanna.m@gmail.com?Subject=Hello.">jones.hanna.m@gmail.com</a> / (514) 649-2986</p>
        <p>[ click on sections below for details ]</p>
      </div>
      <div className="resume__section resume__section--education">
        <h4>Education</h4>
        <div>
          <h5>Lighthouse Labs, Toronto, ON</h5>
          <em>January - March 2016</em>
          <p>Web Development Bootcamp</p>
        </div>
        <div>
          <h5>McGill University, Montréal, QC</h5>
          <em>September 2009 - May 2013</em>
          <p>B.A. History & Art History</p>
        </div>
      </div>
      <div className="resume__section resume__section--skills">
        <h4>Skills & Abilities</h4>
        <div>
          <h5>Programming</h5>
          <p>JavaScript / React / React Native / Redux / Ruby / Rails / HTML / CSS / SQL</p>
        </div>
        <div>
          <h5>Design</h5>
          <p>Sketch / Adobe Creative Suite / Balsamiq</p>
        </div>
      </div>
      <div className="resume__section resume__section--projects">
        <h4>Projects</h4>
        <div>
          <h5>Edusight</h5>
          <p>- Designed and implemented a website for Edusight's new Magic consulting service.</p>
          <p>- Redesigned and rebuilt iOS classroom timelines to make interface more user-friendly.</p>
          <p>- Implemented the front end of a comment bank feature using React, HTML, CSS.</p>
        </div>
        <div>
          <h5>Hopper</h5>
          <p>- Web app dedicated to helping locals and tourists alike navigate Toronto’s nightlife by maintaining a database of community curated “bar hops.” Final group project at Lighthouse Labs.</p>
          <p>- Built using Ruby on Rails, React, PostgreSQL, and the Google Maps API.</p>
        </div>
        <div>
          <h5>Museum of Jewish Montreal</h5>
          <p>- Basic UI / UX design for the Museum of Jewish Montreal to assist with their website
          redesign and make their home page more contemporary, intuitive, and user-friendly.</p>
          <p>- Created mockups and wireframes using Adobe Creative Suite, Balsamiq, and Sketch.</p>
        </div>
      </div>
      <div className="resume__section resume__section--jobs">
        <h4>Professional Experience</h4>
        <div>
          <h5>Web & iOS Developer</h5>
          <div id="job-flex">
            <a href="http://edusight.co" target="_blank"><h6 className="employer">Edusight, Toronto, ON</h6></a>
            <em className="job-dates">(September 2016 - February 2017)</em>
          </div>
          <p>- Junior web developer and designer at an education technology startup.</p>
          <p>- Designed and built web app and iOS features using HTML, CSS, React, React Native,
          Redux, and a variety of other JavaScript tools and libraries.</p>
          <p>- Used Sketch to create detailed mockups for new iOS and web app components with a
          focus on clean, intuitive interfaces.</p>
          <p>- Managed iOS app while becoming familiar with React Native and mobile development.</p>
          <p>- Assisted the customer support team, interfacing with Edusight’s user base to
          provide technical support and respond to feedback.</p>
        </div>
        <div>
          <h5>Development & Special Projects Manager</h5>
          <div id="job-flex">
            <a href="http://imjm.ca/"><h6 className="employer">Museum of Jewish Montreal, Montréal, QC</h6></a>
            <em className="job-dates">(December 2013 - December 2015, March - May 2016)</em>
          </div>
          <p>- Third full-time employee of a start-up virtual museum dedicated to finding new ways
         to preserve and share Montréal’s Jewish history.</p>
          <p>- Worked with an external web developer to redesign the Museum’s website. Created
          mockups using Photoshop and Illustrator that formed the basis for the finished site.</p>
          <p>- Completed basic UI/UX design tasks for the Museum’s new Stories Project oral history
          web app using Balsamiq Mockups and Photoshop.</p>
        </div>
        <div>
          <h5>Research Assistant - Art History Department</h5>
          <div id="job-flex">
            <h6 className="employer">McGill University, Montréal, QC</h6>
            <em className="job-dates">(May - July 2013)</em>
          </div>
          <p>- Conducted research for projects on 19th century French art and culture. Duties
          consisted of compiling bibliographies, creating summary reports on sources, and
          making image licensing inquiries to Art Resource and The Bridgeman Art Library.</p>
        </div>
        <div>
          <h5>Development Intern - Institutional Giving</h5>
          <div id="job-flex">
            <h6 className="employer">New-York Historical Society, New York, NY</h6>
            <em className="job-dates">(June - August 2012)</em>
          </div>
          <p>- Conducted database research to develop profiles for grant-making organizations.</p>
          <p>- Drafted letters of inquiry, wrote and edited sections of grant proposals, and
          contributed to all aspects of donor-related correspondence.</p>
        </div>
      </div>
    </div>
  </Card>
)

export default ResumeScreen;