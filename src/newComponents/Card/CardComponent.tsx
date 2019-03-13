import * as React from 'react';

import './CardStyles.scss';

interface CardComponentProps {};

const CardComponent: React.StatelessComponent<CardComponentProps> = ({ children }) => (
  <div className="Card">
    <div className="Card__background">
      {children}
    </div>
  </div>
)

export default CardComponent;