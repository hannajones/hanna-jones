import * as React from 'react';
import Card from '../../components/Card';
import ResumeSection from './ResumeSection';
import ResumeContent from './ResumeContent';
import './ResumeScreenStyles.scss';

interface ResumeScreenProps {};

const ResumeScreen: React.FunctionComponent<ResumeScreenProps> = () => (
  <Card>
    <div className="resume">
      <div className="resume__header">
        <h1 className="resume__title text--blue">Hanna Jones</h1>
        <a className="text--purple" href="mailto:hanna.m.jones@protonmail.com?Subject=Hello.">hanna.m.jones@protonmail.com</a> 
      </div>
      <ResumeSection title="Skills & Abilities">
        <ResumeContent 
          title="Programming"
          descriptions={[
            "I primarily work with JavaScript, TypeScript, React, Redux, Webpack, HTML, CSS",
            "Experience with TDD using Jest",
            "Some experience working with GraphQL & Apollo",
            "Contributed to a mobile application built using React Native",
            "Limited experience with PHP, Ruby, Rails, SQL",
          ]}
        />
        <ResumeContent 
          title="Design"
          descriptions={[
            "I have done some (mostly amateur) web & graphic design using Sketch, Adobe Creative Suite, and Balsamiq"
          ]}
        />
      </ResumeSection>
      <ResumeSection title="Education">
        <ResumeContent 
          title="Lighthouse Labs, Toronto, ON"
          dates="January - March 2016"
          descriptions={[
            "Web Development Bootcamp focused on Rails and JavaScript"
          ]}
        />
        <ResumeContent 
          title="McGill University, Montréal, QC"
          dates="September 2009 - May 2013"
          descriptions={[
            "B.A. in History with a minor in Art History"
          ]}
        />
      </ResumeSection>
      <ResumeSection title="Professional Experience">
        <ResumeContent 
          title="Front-end Engineer"
          location="Statflo, Toronto, ON"
          locationLink="https://statflo.com/"
          dates="March 2017 - Present"
          descriptions={[
            "Part of a small team of front-end engineers working on interfaces for the various applications that constitute Statflo's relationship-centric, compliant, sales enablement platform",
            "Gained an in-depth knowledge of React, Redux, and Typescript while building components for text-messaging, calling, reporting, and appointment booking projects",
            "Worked towards increasing front-end code coverage by writing tests using Jest and Enzyme",
            "Spearheaded a project to upgrade a legacy application to use Webpack 4. Combined with other optimizations this resulted in a 1-3 second decrease in load time on some pages.",
            "Contributed to the company's open source JS modules"
          ]}
        />
        <ResumeContent 
          title="Front-end Developer (Contract)"
          location="Investors Group, Toronto, ON"
          locationLink="https://www.investorsgroup.com/en/articles"
          dates="January 2017 - March 2017"
          descriptions={[
            "Temporary contract to help the Investors Group digital team create templates for a new blog site built using Adobe Experience Manager CMS",
            "Built templates using HTML, JavaScript, and Foundation CSS"
          ]}
        />
        <ResumeContent 
          title="Web & iOS Developer"
          location="Edusight, Toronto, ON"
          locationLink="https://twitter.com/edusight"
          dates="September 2016 - January 2017"
          descriptions={[
            "Junior web developer and designer at an education technology startup, which ceased operating in January 2017 and was subsequently acquired by Nelson, an educational publisher",
            "Designed and built web app and iOS features using HTML, CSS, React, React Native, Redux, and a variety of other JavaScript tools and libraries",
            "Used Sketch to create detailed mockups for new iOS and web app components with a focus on clean, intuitive interfaces",
            "Managed iOS app while becoming familiar with React Native and mobile development",
            "Assisted the customer support team, interfacing with Edusight’s user base to provide technical support and respond to feedback"
          ]}
        />        
        <ResumeContent 
          title="Development & Special Projects Manager"
          location="Museum of Jewish Montreal, Montréal, QC"
          locationLink="http://imjm.ca/"
          dates="December 2013 - December 2015, March - May 2016"
          descriptions={[
            "Third full-time employee of a start-up virtual museum dedicated to finding new ways to preserve and share Montréal’s Jewish history.",
            "Worked with an external web developer to redesign the Museum’s website. Created mockups using Photoshop and Illustrator that formed the basis for the finished site",
            "Completed basic UI/UX design tasks for the Museum’s new Stories Project oral history web app using Balsamiq Mockups and Photoshop"
          ]}
        />        
      </ResumeSection>
      <ResumeSection title="Projects">
        <ResumeContent 
          title="Statflo"
          descriptions={[
            "Worked to upgrade a text messaging application to use React and Redux",
            "Built components for an appointment booking system using React, GraphQL, parcel-bundler, and PostCSS",
            "Led the re-branding of the company's legacy PHP application, overhauling the CSS to achieve a more contemporary look & feel",
            "Built the frontend for a STOMP websocket based calling application",
            "Spearheaded a project to upgrade a legacy application to use Webpack 4. Combined with other optimizations this resulted in a 1-3 second decrease in load time on some pages.",
            "Contributed to the company's open source JS modules"
          ]}
        />
        <ResumeContent 
          title="Edusight"
          descriptions={[
            "Designed and implemented a website for Edusight's new Magic consulting service.",
            "Redesigned and rebuilt iOS classroom timelines to make interface more engaging.",
            "Implemented the front end of a comment bank feature using React, HTML, CSS."
          ]}
        />
        <ResumeContent 
          title="Museum of Jewish Montreal"
          descriptions={[
            "Basic UI / UX design for the Museum of Jewish Montreal to assist with their website redesign and make their home page more contemporary, intuitive, and user-friendly.",
            "Created mockups and wireframes using Adobe Creative Suite, Balsamiq, and Sketch"
          ]}
        />        
      </ResumeSection>
    </div>
  </Card>
);

export default ResumeScreen;