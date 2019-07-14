import * as React from 'react';
import Card from '../../components/Card';

interface AboutScreenProps {};

const AboutScreen: React.FunctionComponent<AboutScreenProps> = () => (
  console.log('got here'),
  <Card>
    <div className="about">
      <div className="about__imageContainer">
        <img src="https://s3.amazonaws.com/hanna-jones-photos/about/hanna-web.jpg" alt="hanna jones" className="about__image"/>
      </div>
      <h3 className="about__header">Hanna Jones</h3>
      <div className="about__description">
        <p>
        My name is Hanna Jones and I'm a front end Web Developer and recent Toronto transplant by way of Montreal (and originally San Francisco) looking to build beautiful, unique websites & web apps. I'm interested in exploring the potential of JavaScript for building clean, intuitive user interfaces and delving deeper into data-driven applications. Long distance cyclist & techno enthusiast.
        </p>
        <p>I'm currently looking to take on new projects and opportunities. Explore this site to learn more about my experience and projects, and feel free to <a href="mailto:hanna.m.jones@protonmail.com?Subject=Hello.">get in touch.</a></p>
      </div>
    </div>
  </Card>
);

export default AboutScreen;