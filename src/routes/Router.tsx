import { HealthContainer, Home } from '../containers';
import { Route, Switch } from 'react-router-dom';

import React from 'react';
import { routes } from '../config';

const Router = (): JSX.Element => (
  <Switch>
    <Route path={routes.home} component={Home} />
    <Route path={routes.health} component={HealthContainer} />
  </Switch>
);

export default Router;
