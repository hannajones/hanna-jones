import * as React from 'react';
import { Link } from 'react-router-dom'
import { ProjectComponentProps } from './types';
import ProjectComponent from './ProjectComponent';

const withLink = <P extends ProjectComponentProps>(WrappedComponent: React.ComponentType<P>) =>
  class LinkedProject extends React.Component<P> {
    render() {
      const { link } = this.props;
      return (
        link ? <Link to={link} className="project__link"><WrappedComponent {...this.props} /></Link> : <WrappedComponent {...this.props} />
      )
    }
};

export default withLink(ProjectComponent);