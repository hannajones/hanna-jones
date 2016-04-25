import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Project from './components/Project'
import ProjectsContainer from './components/ProjectsContainer'
import ProjectForm from './components/ProjectForm'

// render(<App/>, document.getElementById('app'))

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="project/:id" component={Project}/>
    <Route path="new" component={ProjectForm}/>
  </Router>
), document.getElementById('app'))