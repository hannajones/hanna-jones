import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProjectsDataProvider } from './store/Projects';

// components
import Menu from './components/Menu';
import LoadingIndicator from './components/LoadingIndicator';

// screens
const Projects = React.lazy(() => import('./screens/Projects'));
const Project = React.lazy(() => import('./screens/Project'));
const About = React.lazy(() => import('./screens/About'));
const Resume = React.lazy(() => import('./screens/Resume'));
const NotFound = React.lazy(() => import('./screens/NotFound'));

// routes
import Routes from './routes';

import './App.scss';

render((
  <Router>
      <div className="app">
        <div className="app__menu">
          <Menu />
        </div>
        <div className="app__screens">
          <ProjectsDataProvider>
          <React.Suspense fallback={<LoadingIndicator />}>
            <Switch>
                <Route exact path={Routes.ABOUT} component={About} />
                <Route path={Routes.PROJECTS} component={Projects} />
                <Route path={Routes.PROJECT} component={Project} />
                <Route path={Routes.RESUME} component={Resume} />
                <Route component={NotFound} />
            </Switch>
          </React.Suspense>
          </ProjectsDataProvider>
        </div>
      </div>
  </Router>
), document.getElementById('app'));
