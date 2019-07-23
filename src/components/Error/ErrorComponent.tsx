import * as React from 'react';
import * as cx from 'classnames';
import './ErrorComponentStyles.scss';

interface ErrorComponentProps {
  message: string;
  className?: string;
}

const ErrorComponent: React.FunctionComponent<ErrorComponentProps> = ({ message, className }) => (
  <div className={cx('error', className)}>
    <div className="error__container">
      <span className="error__message">{message}</span>
    </div>
  </div>
);

export default ErrorComponent;
