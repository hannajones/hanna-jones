import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../routes';

import './MenuStyles.scss';

interface MenuComponentProps {};

const MenuComponent: React.FunctionComponent<MenuComponentProps> = () => (
  <div className="menu">
    <div className="menu__background">
      <Link to={Routes.PROJECTS} className="menu__link">
        <div className="menu__item">
          <h3 className="menu__header">Hanna</h3>
          <h3 className="menu__header">Jones</h3>
        </div>
      </Link>
      <Link to={Routes.PROJECTS} className="menu__link">
        <div className="menu__item">
          <h4 className="menu__header--small">Projects</h4>
        </div>
      </Link>
      <Link to={Routes.ABOUT} className="menu__link">
        <div className="menu__item">
          <h4 className="menu__header--small">About</h4>
        </div>
      </Link>
      <Link to={Routes.RESUME} className="menu__link">
        <div className="menu__item">
          <h4 className="menu__header--small">Résumé</h4>
        </div>
      </Link>
      {/* TODO: social icons */}
      {/* TODO: dark mode switch */}
    </div>
  </div>
);

export default MenuComponent;