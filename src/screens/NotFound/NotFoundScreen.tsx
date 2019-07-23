import * as React from 'react';
import ErrorComponent from '../../components/Error';
import './NotFoundStyles.scss';

const NotFound = () => (
  <ErrorComponent className="notFound" message="404" />
);

export default NotFound;
