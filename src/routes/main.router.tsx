import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes, { RouteConfigInterface } from './routes.config';
import Private from 'components/Private/Private';

const MainRoute = () => {
  return (
    <Switch>
      {routes.map((route: RouteConfigInterface, i) => {
        return route.isPrivate ? (
          <Private key={i} path={route.path} component={route.component} exact={route.exact} />
        ) : (
          <Route key={i} path={route.path} component={route.component} exact={route.exact} />
        );
      })}
    </Switch>
  );
};

export default MainRoute;
