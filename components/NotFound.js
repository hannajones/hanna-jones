import React from 'react';
import { Link } from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h2>Oops, Something Went Wrong...</h2>
        <h4>http://hanna-jones.com/{this.props.params.splat} does not exist. Please try a different route.</h4>
        <button className="waves-effect waves-light btn"><Link className="white-text" to="/">Home</Link></button>
      </div>
    )
  }
}

export default NotFound