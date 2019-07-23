import * as React from 'react';
import { NavLink } from 'react-router-dom';

// components
import LinkedInIcon from '../../assets/icons/LinkedIn';
import GithubIcon from '../../assets/icons/Github';

// types
import Routes from '../../routes';

// styles
import './MenuStyles.scss';

interface MenuComponentProps {}

const MenuComponent: React.FunctionComponent<MenuComponentProps> = () => (
  <div className="menu">
    <div className="menu__background">
      <div className="menu__item">
        <h3 className="menu__header">Hanna Jones</h3>
      </div>
      <NavLink to={Routes.ABOUT} className="menu__link" activeClassName="menu__link--active" exact>
        <div className="menu__item">
          <h4 className="menu__header--small">About</h4>
        </div>
      </NavLink>
      <NavLink to={Routes.PROJECTS} className="menu__link" activeClassName="menu__link--active" exact>
        <div className="menu__item">
          <h4 className="menu__header--small">Projects</h4>
        </div>
      </NavLink>
      <NavLink to={Routes.RESUME} className="menu__link" activeClassName="menu__link--active" exact>
        <div className="menu__item">
          <h4 className="menu__header--small">Résumé</h4>
        </div>
      </NavLink>
      <div className="menu__contact menu__item">
        <a href="https://www.linkedin.com/in/hanna-jones-27345a20/" target="__blank" className="menu__contact__link">
          <span className="menu__contact__item">
            {LinkedInIcon}
          </span>
        </a>
        <a href="https://github.com/hannajones/hanna-jones" target="__blank" className="menu__contact__link">
          <span className="menu__contact__item">
            {GithubIcon}
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default MenuComponent;
