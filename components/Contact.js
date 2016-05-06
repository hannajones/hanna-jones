import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="section-background z-depth-2">
          <div id="contact-text">
            <p>I'm always looking to take on new projects...something less trite possibly. Not going to be much text one way or another.</p>
            <div id="contact-info-flex">
              <div id="email"><a href="mailto:jones.hanna.m@gmail.com?Subject=Hello.">jones.hanna.m@gmail.com</a></div>
              <div id="phone">(514) 649-2986</div>
              <div id="social-media">Facebook, Instagram, GitHub, LinkedIn</div>
            </div>
            <div id="about-site"> 
              <p>This site was built in Toronto in April 2016 with the help of 50+ cups of coffee.</p>
              <p>&copy; 2016 Hanna Jones</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
