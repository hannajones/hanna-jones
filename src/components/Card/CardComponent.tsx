import * as React from 'react';
import * as cx from 'classnames';

import './CardStyles.scss';

interface CardComponentProps {
  className?: string;
};

const CardComponent: React.FunctionComponent<CardComponentProps> = ({ className, children }) => (
  <div className={cx('card', className)}>
    <div className="card__background">
      {children}
    </div>
  </div>
)

export default CardComponent;