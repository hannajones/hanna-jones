import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="section-background z-depth-2 center-align">
          <div id="contact-text">
            <p>I'm always looking to take on new projects / get a coffee / whatever.</p>
            <p>Email: <a href="mailto:jones.hanna.m@gmail.com?Subject=Hello.">jones.hanna.m@gmail.com</a></p>
            <p>Find me on the Internet:</p>
            <div id="contact-info-flex">
              <a href="https://github.com/hannajones" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-github-square fa-3x" id="contact-social-icon"></i>
                </span>
              </a>
              <a href="https://ca.linkedin.com/in/hanna-jones-27345a20" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-linkedin-square fa-3x" id="contact-social-icon" aria-hidden="true"></i>
                </span>
              </a>
              <a href="https://www.instagram.com/jonesxhanna/" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-instagram fa-3x" id="contact-social-icon"></i>
                </span>
              </a>
              <a href="https://www.facebook.com/xxyzzzzzzzzz" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-facebook-square fa-3x" id="contact-social-icon"></i>
                </span>
              </a>
            </div>
            <div id="about-site"> 
              <p>This site was built in Toronto & Montreal April - May 2016.</p>
              <p>&copy; 2016 Hanna Jones</p>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Contact;
