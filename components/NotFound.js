import React from 'react';
import { Link } from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h2>Oops, Something Went Wrong...</h2>
        <h4>http://hanna-jones.com/{this.props.params.splat} does not exist. Please try a different route.</h4>
        <a className="waves-effect waves-light btn"><Link to="/">Home</Link></a>
      </div>
    )
  }
}

export default NotFound