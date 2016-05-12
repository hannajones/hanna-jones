import React from 'react';
import { Link } from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="section-background z-depth-2">
          <div className="not-found">
            <h2>Oops, Something Went Wrong...</h2>
            <h4>http://hanna-jones.com/{this.props.params.splat} does not exist. Please try a different route.</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound