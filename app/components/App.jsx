import React from 'react';

// Components
import ProjectsContainer from './ProjectsContainer';
import ProjectForm from './ProjectForm';
import Menu from './Menu';

export default class App extends React.Component {
  render = () => {
    return <div id="container-flex">
      <Menu/>
      {this.props.children}
    </div>
  };
}
