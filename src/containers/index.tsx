import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pages from './pages';

const Containers: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Pages} exact />
    </Switch>
  </BrowserRouter>
);

export default Containers;
