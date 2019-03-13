import * as React from 'react';

// Components
import Menu from './Menu';

export default class App extends React.Component {  
  render = () => {
    return <div id="container-flex">
      <Menu />
      {this.props.children}
    </div>
  };
}
