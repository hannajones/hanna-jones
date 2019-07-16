import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../routes';
import Card from '../../components/Card';

import './AboutScreenStyles.scss';

interface AboutScreenProps {};

const AboutScreen: React.FunctionComponent<AboutScreenProps> = () => (
  <Card>
    <div className="about">
      <div className="about__imageContainer">
        <img src="https://s3.amazonaws.com/hanna-jones-photos/about/hanna-web.jpg" alt="hanna jones" className="about__image"/>
      </div>
      <div className="about__description">
        <p className="about__description__paragraph">
          My name is <span className="text--green">Hanna Jones</span>, and I'm a front-end web developer working primarily with React and TypeScript to build beautiful, unique websites and applications. I'm also an avid cyclist, techno enthusiast, and dark mode evangelist.
        </p>
        <p className="about__description__paragraph">
          I was born & raised in <span className="text--blue">San Francisco</span>, but have called <span className="text--blue">Toronto</span> home for the past three years.
        </p>
        <p className="about__description__paragraph">
          Explore this site to learn more about my <Link to={Routes.RESUME} className="text text--purple">experiences</Link> and <Link to={Routes.PROJECTS} className="text text--purple">projects</Link>, and feel free to <a className="text text--purple" href="mailto:hanna.m.jones@protonmail.com?Subject=Hello.">get in touch</a>.</p>
      </div>
    </div>
  </Card>
);

export default AboutScreen;