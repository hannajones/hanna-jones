import * as React from 'react';
import { Link } from 'react-router-dom';

// components
import ProjectComponent from './ProjectComponent';

// types
import { ProjectComponentProps } from './types';

const withLink = <P extends ProjectComponentProps>(WrappedComponent: React.ComponentType<P>) =>
  class LinkedProject extends React.Component<P> {
    render() {
      const { link } = this.props;
      return (
        link ? <Link to={link} className="project__link"><WrappedComponent {...this.props} /></Link> : <WrappedComponent {...this.props} />
      );
    }
};

export default withLink(ProjectComponent);
