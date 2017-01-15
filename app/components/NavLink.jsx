import React from 'react';
import { Link, IndexLink, withRouter } from 'react-router';
import css from '../stylesheets/menu.css';

class NavLink extends React.Component {
  render = () => {
    const { router } = this.props;
    const { index, to, children, ...props } = this.props;

    let isActive;
    isActive = router.isActive(to);

    return <IndexLink className="menu-link" to={to} {...props}>
      <div className={isActive ? 'active' : ''}>
        {children}
      </div>
    </IndexLink>
  }
}

NavLink = withRouter(NavLink);

export default NavLink;
