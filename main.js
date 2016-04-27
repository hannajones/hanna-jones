import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Project from './components/Project'
import ProjectsContainer from './components/ProjectsContainer'
import ProjectForm from './components/ProjectForm'
import NotFound from './components/NotFound'
import Resume from './components/Resume'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="project/:id" component={Project}/>
    <Route path="new" component={ProjectForm}/>
    <Route path="resume" component={Resume}/>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('app'))