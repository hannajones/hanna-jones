import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Particles from 'particlesjs/dist/particles.min';

import { ProjectsDataProvider } from './store/Projects';

// components
import Menu from './components/Menu';

// screens
import Projects from './screens/Projects';
import Project from './screens/Project';
import About from './screens/About';
import Resume from './screens/Resume';

// routes
import Routes from './routes';

import './App.scss';

// initialize Particles
Particles.init({
	selector: '.particles',
  color: '#4d84f1'
});

// TODO: change all fonts to Inconsolata
// TODO: dark mode
// TODO: maybe wrap in a card instead
// TODO: tslint/eslint
// TODO: audit package.json for unnecessary stuff
// TODO: move to lowercase css namespaces
render((
  <Router>
      <div className="app">
        <div className="app__menu">
          <Menu />
        </div>
        <div className="app__screens">
          <ProjectsDataProvider>
            <Switch>
                <Route exact path={Routes.PROJECTS} component={Projects} />
                <Route path={Routes.PROJECT} component={Project} />
                <Route path={Routes.ABOUT} component={About} />
                <Route path={Routes.RESUME} component={Resume} />
            </Switch>
          </ProjectsDataProvider>
        </div>
      </div>
  </Router>
), document.getElementById('app'));
