import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div id="about-background" className="z-depth-2">
        <div id="about-image-container">
          <img id="about-image" src="https://s3.amazonaws.com/hanna-jones-photos/about/hanna-web.jpg" alt="hanna jones"/>
        </div>
        <h4 id="about-header" className="center-align">Hanna Jones</h4>
        <div id="description-content" className="center-align">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare neque elit, at maximus turpis sagittis nec. Proin aliquam, leo sit amet dictum ullamcorper, purus diam eleifend dolor, ut sagittis mi quam placerat arcu. Proin eu consequat mi. Vivamus iaculis venenatis odio ac luctus. Duis a tincidunt massa, sagittis pulvinar turpis. Nam maximus massa vel ultrices volutpat. Cras mattis, magna ac faucibus vulputate, justo nisl varius justo, ac elementum velit quam sit amet orci. In hac habitasse platea dictumst. Cras lectus felis, tempus in felis nec, ullamcorper facilisis ligula. Duis sed semper metus, vitae scelerisque felis. Donec bibendum tincidunt mollis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare neque elit, at maximus turpis sagittis nec. Proin aliquam, leo sit amet dictum ullamcorper, purus diam eleifend dolor, ut sagittis mi quam placerat arcu. Proin eu consequat mi. Vivamus iaculis venenatis odio ac luctus. Duis a tincidunt massa, sagittis pulvinar turpis. Nam maximus massa vel ultrices volutpat. Cras mattis, magna ac faucibus vulputate, justo nisl varius justo, ac elementum velit quam sit amet orci. In hac habitasse platea dictumst. Cras lectus felis, tempus in felis nec, ullamcorper facilisis ligula. Duis sed semper metus, vitae scelerisque felis. Donec bibendum tincidunt mollis.</p>
        </div>
      </div>
    )
  }
}

export default About