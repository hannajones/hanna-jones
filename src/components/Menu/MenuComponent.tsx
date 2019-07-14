import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../routes';

interface MenuComponentProps {};

const MenuComponent: React.FunctionComponent<MenuComponentProps> = () => (
  <div className="menu">
    <Link to={Routes.PROJECTS}>
      <div className="menu__link">
        <h3>Hanna</h3>
        <h3>Jones</h3>
      </div>
    </Link>
    <Link to={Routes.PROJECTS}>
      <div className="menu__link">
        <h4>Projects</h4>
      </div>
    </Link>
    <Link to={Routes.ABOUT}>
      <div className="menu__link">
        <h4>About</h4>
      </div>
    </Link>
    <Link to={Routes.RESUME}>
      <div className="menu__link">
        <h4>Résumé</h4>
      </div>
    </Link>
    {/* TODO: social icons */}
  </div>
);

export default MenuComponent;