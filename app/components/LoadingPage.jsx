import React from 'react';
import css from '../stylesheets/project.css';

// find a better way to do this - something animated
// this will work for now
const LoadingPage = () => {
  return <div className="content-container">
    <div className="section-background z-depth-2">
      Loading...
    </div>
  </div>
}

export default LoadingPage;
