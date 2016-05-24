import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Project from './components/Project';
import ProjectsContainer from './components/ProjectsContainer';
import ProjectForm from './components/ProjectForm';
import NotFound from './components/NotFound';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProjectsContainer}/>
      <Route path="about" component={About}/>
      <Route path="projects" component={ProjectsContainer}/>
      <Route path="project/:id" component={Project}/>
      <Route path="new" component={ProjectForm}/>
      <Route path="resume" component={Resume}/>
      <Route path="contact" component={Contact}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('app'))