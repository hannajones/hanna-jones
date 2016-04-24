import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Project from './components/Project'
import ProjectsContainer from './components/ProjectsContainer'

// render(<App/>, document.getElementById('app'))

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/projects" component={ProjectsContainer}/>
    <Route path="/projects/:title" compoenent={Project}/>
  </Router>
), document.getElementById('app'))