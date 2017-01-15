import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
  render = () => {
    const {
      props: {
        params: {splat: notFoundPath}
      }
    } = this;
    return (
      <div className="content-container">
        <div className="section-background z-depth-2">
          <div className="not-found">
            <h2>Oops, Something Went Wrong...</h2>
            <h4>http://hanna-jones.com/{notFoundPath} does not exist. Please try a different route.</h4>
          </div>
        </div>
      </div>
    )
  };
}