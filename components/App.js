import React from 'react';
import ProjectsContainer from './ProjectsContainer';
import ProjectForm from './ProjectForm';
import Menu from './Menu';
import Rebase from 're-base';
import ProjectActions from '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore'

var base = Rebase.createClass('https://newnewtest.firebaseio.com/');

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="container-flex">
        <Menu/>
        {this.props.children}
      </div>
    )
  }
}

export default App
