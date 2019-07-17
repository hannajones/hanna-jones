import * as React from 'react';

import './LoadingIndicator.scss';

interface LoadingIndicatorProps {}

const LoadingIndicatorComponent: React.FunctionComponent<LoadingIndicatorProps> = () => (
  <div className="loadingIndicatorContainer">
    <div className="loadingIndicator">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default LoadingIndicatorComponent;