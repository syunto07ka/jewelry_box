import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from './pages';

const Containers: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true}>
        <Pages />
      </Route>
    </Switch>
  </Router>
);

export default Containers;
