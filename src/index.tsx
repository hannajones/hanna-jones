import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Projects from './screens/Projects';

import './App.scss';

// TODO: maybe wrap in a card instead
render((
  <Router>
      <div className="AppContainer">
        <Menu/>
          <div className="AppContainer__screens">
          <Route path="/" component={Projects} />
        </div>
      </div>
  </Router>
), document.getElementById('app'))
