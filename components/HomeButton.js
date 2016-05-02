import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <button className="waves-effect waves-light btn">
      <Link className="white-text" to="/">Home</Link>
    </button>
  )
}