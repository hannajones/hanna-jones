import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ProjectsDataProvider } from './store/Projects';

// components
import Menu from './components/Menu';

// screens
import Projects from './screens/Projects';
import Project from './screens/Project';
import About from './screens/About';
import Resume from './screens/Resume';
import NotFound from './screens/NotFound';

// routes
import Routes from './routes';

import './App.scss';

// TODO: tslint/eslint
// TODO: audit package.json for unnecessary stuff
render((
  <Router>
      <div className="app">
        <div className="app__menu">
          <Menu />
        </div>
        <div className="app__screens">
          <ProjectsDataProvider>
            <Switch>
                <Route exact path={Routes.ABOUT} component={About} />
                <Route path={Routes.PROJECTS} component={Projects} />
                <Route path={Routes.PROJECT} component={Project} />
                <Route path={Routes.RESUME} component={Resume} />
                <Route component={NotFound} />
            </Switch>
          </ProjectsDataProvider>
        </div>
      </div>
  </Router>
), document.getElementById('app'));
