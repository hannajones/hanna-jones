import * as React from 'react';
import { withRouter } from 'react-router-dom';

import '../stylesheets/menu.css';

interface NavLinkProps {
  router: any;
  index: number;
  to: any;
}

class NavLink extends React.Component<NavLinkProps, {}>{
  render = () => {
    // const { router } = this.props;
    // const { index, to, children, ...props } = this.props;

    // let isActive;
    // isActive = router.isActive(to);

    // return <Link className="menu-link" to={to} {...props}>
    //   <div className={isActive ? 'active' : ''}>
    //     {children}
    //   </div>
    // </Link>
    return <div>this is a navlink</div>
  }
}

export default withRouter(NavLink as any);
